//[M1S10] Mini-Projeto nº 1 - Produtos

const express = require("express");
const app = express();
const PORT = 3335;

app.use(InformacaoChamada);

app.use(express.json()); //um middleware no Express.js que permite ao servidor Express entender e interpretar o corpo das requisições HTTP que contêm dados no formato JSON. Irá converter este JSON em um objeto JavaScript, que pode ser acessado no seu código usando req.body.

// Instruções do Exercício:

// Funcionalidades do CRUD:
// Criar Produto:
// Crie uma rota POST para adicionar um novo produto.
// A rota deve receber um JSON com os dados do produto (por exemplo, nome, preço, descrição) para esta rota.
// O servidor deve validar os dados recebidos e adicionar o produto a uma lista temporária.

let produtos = [];

app.post("/produtos", (req, res) => {
  const produto = req.body;

  const novoProduto = {
    id: produtos.length + 1,
    nome: produto.nome,
    preco: produto.preco,
    marca: produto.marca,
  };
  produtos.push(novoProduto);

  res
    .status(201)
    .send({ "Novo produto adicionado com sucesso!": { ...novoProduto } });
});

// nodemon miniProjeto1.js no terminal
//http://localhost:3335/produtos + escrever no 'body', EM FORMATO JSON (nao text), o produto { "nome": "", "preco": "", "marca":""}

// Listar Produtos:
// Crie uma rota GET para obter todos os produtos.
// O servidor deve retornar a lista de produtos em formato JSON.

app.get("/produtos", (req, res) => {
  res.send(produtos);
});

//http://localhost:3335/produtos

// Atualizar Produto:
// Crie uma rota PUT para atualizar um produto existente.
// A rota deve receber um JSON com os dados atualizados do produto, incluindo o ID do produto a ser atualizado.
// O servidor deve encontrar o produto na lista pelo ID e atualizar seus dados.

app.put("/produtos/:id", (req, res) => {
  //índice do produto na lista produtos que possui o ID correspondente ao id especificado na requisição.
  const { id } = req.params; // Extrai o parâmetro 'id' da URL
  const atualizadoProdutoId = req.body; // Extrai os dados atualizados do corpo da requisição

  const posicaoProdutoPut = produtos.findIndex((item) => item.id === parseInt(id)); //O findIndex() percorre cada item na lista produtos. Para cada item, a função de callback é executada.Se a condição (item.id === parseInt(id)) for verdadeira para um determinado item, findIndex() retorna o índice desse item na lista produtos.Se nenhum item na lista satisfizer a condição, findIndex() retorna -1.Esta função verifica se o id do produto é igual ao id especificado na requisição (após a conversão para um número inteiro)

  if (posicaoProdutoPut !== -1) {
    // Atualiza os dados do produto encontrado com os novos valores do corpo da requisição - TODOS
    produtos[posicaoProdutoPut].nome = req.body.nome;
    produtos[posicaoProdutoPut].preco = req.body.preco;
    produtos[posicaoProdutoPut].marca = req.body.marca;

    res
      .status(200)
      .send({ "Produto atualizado com sucesso!": { ...atualizadoProdutoId } });
  } else {
    res.status(404).send("Produto/id não encontrado.");
  }
});

// Excluir Produto:
// Crie uma rota DELETE para excluir um produto existente.
// A rota deve receber o ID do produto a ser excluído.
// O servidor deve encontrar o produto na lista pelo ID e removê-lo.

app.delete("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const posicaoProdutoDeletar = produtos.findIndex((item) => item.id === parseInt(id));
  if (posicaoProdutoDeletar === -1) {
    res.status(404).send("Produto/id não encontrado.");
    return;
  }
  const produtoRemovido = produtos.splice(posicaoProdutoDeletar, 1)[0];
  res.status(200).send({ "Produto removido com sucesso!": produtoRemovido });
});

// Testando com o Postman:
// Monte uma coleção no Postman para realizar as operações CRUD.
// As rotas devem enviar requisições para as rotas criadas usando os métodos HTTP corretos (POST, GET, PUT, DELETE)

// Aplicando Middlewares:
// Adicione Middlewares nas rotas para logar as informações de cada chamada realizada

function InformacaoChamada(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Chama o próximo middleware ou rota
}
// app.use(InformacaoChamada); ----> deve ser colocado antes de todos as chamadas de rotas, inicio do arquivo.

//new Date() está criando um novo objeto que contém a data e a hora atuais do sistema.
//.toISOString() converte a data e hora do objeto Date em uma string no formato ISO 8601.
// ${req.method} simplesmente retorna o método HTTP usado na solicitação.
// ${req.originalUrl} O URL original inclui o caminho e, opcionalmente, a query string da solicitação HTTP. 


//OU colocar este código todo no inicio do arquivo, antes de todas as requisições.
// app.use((req, res, next) => {
//   const InformacaoChamada = new Date().toISOString();
//   console.log(`[${InformacaoChamada}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`);
//   next();
// });

//OU
// const logger = (req, res, next) => { 
//   console.log(Nova requisição: ${req.method} ${req.url}); 
//   next(); 
// }


// Recursos Adicionais (opcional):
// Você pode adicionar validação de entrada para garantir que os dados enviados para o servidor sejam válidos.
// if (!nome || !preco || !marca) {
//   return res.status(400).send("Por favor, forneça nome, preço e marca do produto.");
// }


// Também pode implementar um mecanismo de persistência simples usando um array em memória para armazenar os produtos.

// Os alunos podem experimentar com outros tipos de requisições, como PATCH para atualizações parciais ou OPTIONS para obter informações sobre as rotas disponíveis.

app.patch("/produtos/:id", (req,res) => {
    const { id } = req.params;
    const atualizarParcial = req.body
    
    const posicaoProdutoPatch = produtos.findIndex(item => item.id === parseInt(id))
    if(posicaoProdutoPatch === -1)
    res.status(400).send("Produto/id não encontrado")
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

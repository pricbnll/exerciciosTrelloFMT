const express = require("express");
const app = express();
const PORT = 3335;

app.use(express.json());

app.use((req, res, next) => {
  const InformacaoChamada = new Date().toISOString();
  console.log(
    `[${InformacaoChamada}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`
  );
  next();
});

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

app.get("/produtos", (req, res) => {
  res.send(produtos);
});

app.put("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const atualizadoProdutoId = req.body;

  const posicaoProdutoPut = produtos.findIndex((item) => item.id === parseInt(id));
  if (posicaoProdutoPut !== -1) {
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

// Recursos Adicionais (opcional):
// Você pode adicionar validação de entrada para garantir que os dados enviados para o servidor sejam válidos.
// Também pode implementar um mecanismo de persistência simples usando um array em memória para armazenar os produtos.
// Os alunos podem experimentar com outros tipos de requisições, como PATCH para atualizações parciais ou OPTIONS para obter informações sobre as rotas disponíveis.

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

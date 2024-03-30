// [M1S09] Ex 1 - Introdução ao Express - Crie um novo projeto Node.js. Instale o Express.js usando o npm. Crie um arquivo app.js e configure um servidor Express básico que escute na porta 3000.

const express = require("express")
const app = express()


//[M1S09] Ex 2 - Rotas - Adicione rotas ao novo projeto: Uma rota GET que responda à URL '/sobre' com uma mensagem sobre o seu aplicativo. Uma rota GET que responda à URL '/contato' com uma mensagem de contato.

app.get("/sobre", function(req,res){
    res.send("Este é o aplicativo do exercicio 2 da semana 9 do Trello")
})
//http://localhost:3000/sobre

app.get("/contato", (req,res) =>{
    res.send("Meu contato é por email@email.com")
})
// http://localhost:3000/contato

// [M1S09] Ex 4 - Parâmetros - Defina uma rota GET que aceite um parâmetro de rota, como '/produto/:id', e responda com uma mensagem personalizada com base no ID do produto fornecido.

app.get("/produto/:id", (req, res) => {
    let id = req.params.id
    res.send(`Você pesquisou pelo produto com id ${id}`)
})
//buscar informação de algo especifico - deletar, buscar ou atualizar algo especifico com id
//http://localhost:3000/produto/15
// Você pesquisou pelo produto com id 15


// [M1S09] Ex 5 - Arquivos Estáticos - Configure o Express para servir arquivos estáticos, como imagens, arquivos CSS e JavaScript, de um diretório específico em seu projeto.

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html")
})

// [M1S09] Ex 3 - MIddleware - Crie um middleware que registre informações sobre todas as solicitações recebidas pelo servidor Express.
// Use esse middleware para registrar o método HTTP, a URL e o horário de cada solicitação no console. - feito pelo professor


// const logHoraMiddleware = (req, res, next) => {
//     const horaAtual = new Date().toISOString(); // chatGPT: new Date() é um objeto em JavaScript que representa uma data e hora. Quando você chama new Date(), está criando um novo objeto que contém a data e a hora atuais do sistema..toISOString() é um método que pertence ao objeto Date em JavaScript. Esse método converte a data e hora do objeto Date em uma string no formato ISO 8601. Esse formato é uma convenção internacionalmente reconhecida para representar datas e horas. Ele se parece com isso: "2024-03-29T12:00:00.000Z", onde os diferentes elementos representam ano, mês, dia, hora, minuto, segundo e milissegundos.
//     console.log(
//       `[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`
//       ); // ChatGPT:  ${req.method}: Aqui, req é uma abreviação comum para "request" (ou solicitação, em português). É um objeto que representa a requisição HTTP que o servidor web recebeu. method é uma propriedade desse objeto que contém o método HTTP usado na solicitação. O método HTTP indica qual tipo de ação o cliente deseja realizar no recurso solicitado. Alguns exemplos comuns de métodos HTTP são "GET", "POST", "PUT" e "DELETE". Portanto, ${req.method} simplesmente retorna o método HTTP usado na solicitação. ${req.originalUrl}: Mais uma vez, req é o objeto que representa a requisição HTTP. originalUrl é outra propriedade desse objeto que contém o URL original solicitado pelo cliente. O URL original inclui o caminho e, opcionalmente, a query string da solicitação HTTP. Por exemplo, se um cliente solicitar http://example.com/foo/bar?param1=value1, ${req.originalUrl} retornaria "/foo/bar?param1=value1".

//     next(); // Chamar next() para passar a solicitação para o próximo middleware
//   };

// app.use(logHoraMiddleware())

const logHoraMiddleware = (req, res, next) => {
    const horaAtual = new Date().toISOString();
    console.log(
      `[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`
      );
    next(); // Chamar next() para passar a solicitação para o próximo middleware
  };

app.use(logHoraMiddleware())


// ou simplificando usando o app.use que utilizará em todas as aplicações

// Middleware para registrar informações sobre todas as solicitações recebidas
// app.use((req, res, next) => {
//     const horaAtual = new Date().toISOString();
//     console.log(`[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`);
//     next(); // Chamar next() para passar a solicitação para o próximo middleware
//   });


app.listen(3000, () =>{
    console.log("Servidor online do exercicício do trello - semana 9")
})



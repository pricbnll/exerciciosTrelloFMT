// [M1S09] Ex 1 - Introdução ao Express - Crie um novo projeto Node.js. Instale o Express.js usando o npm. Crie um arquivo app.js e configure um servidor Express básico que escute na porta 3000.

const express = require("express")
const app = express()


//[M1S09] Ex 2 - Rotas - Adicione rotas ao novo projeto: Uma rota GET que responda à URL '/sobre' com uma mensagem sobre o seu aplicativo. Uma rota GET que responda à URL '/contato' com uma mensagem de contato.

app.get("/sobre", function(req,res){
    res.send("Este é o aplicativo do exercicio 2 da semana 9 do Trello")
})

app.get("/contato", (req,res) =>{
    res.send("Meu contato é por email@email.com")
})

// [M1S09] Ex 4 - Parâmetros - Defina uma rota GET que aceite um parâmetro de rota, como '/produto/:id', e responda com uma mensagem personalizada com base no ID do produto fornecido.

app.get("/produto/:id", (req, res) => {
    let id = req.params.id
    res.send(`Você pesquisou pelo produto com id ${id}`)
})

//http://localhost:3000/produto/15
// Você pesquisou pelo produto com id 15


app.listen(3000, () =>{
    console.log("Servidor online do exercicício do trello - semana 9")
})
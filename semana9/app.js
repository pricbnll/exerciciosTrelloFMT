const express = require("express")
const app = express()

app.get("/sobre", function(req,res){
    res.send("Este é o aplicativo do exercicio 2 da semana 9 do Trello")
})

app.get("/contato", (req,res) =>{
    res.send("Meu contato é por email@email.com")
})

app.listen(3000, () =>{
    console.log("Servidor online do exercicício do trello - semana 9")
})
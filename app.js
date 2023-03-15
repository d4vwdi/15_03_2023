const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Primeira Página")
})

app.listen(8081,function(){
    console.log("Servidor Ativo!")
})
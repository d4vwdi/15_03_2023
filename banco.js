const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conexao realizada com sucesso!")
}).catch(function(erro){
    console.log("Falha na conexao: " + erro)
})

const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.INTEGER
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.STRING
    },
})

//Agendamentos.sync({force: true})

/*Agendamentos.create({
    nome: "Jeferson Roberto de Lima",
    endereco: "Av Aguia de Haia",
    bairro: "Jd São Nicolau",
    cep: 08390123,
    cidade: "São Paulo",
    estado: "SP"
})*/
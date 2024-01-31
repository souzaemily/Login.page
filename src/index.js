// Importação 
const express = require("express");
const boyParser = require('body-parser');
const cors = require("cors"); // Biblioteca consumo da api
const routes = require("./routes");

const app = express();// Criando a estancia

app.use(cors());

app.use(boyParser.urlencoded({extended: false})); // Iniciando o boyParser
app.use(boyParser.json()); //Convertendo para json
app.use(routes);

app.listen(3030, () => {
    console.log("API RODANDO!");
    console.log("http://localhost:3030/");
})
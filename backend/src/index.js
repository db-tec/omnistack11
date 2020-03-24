const express  = require('express');
const routes = require('./routes');


const app = express();
// Reconhecer o json no corpo da requisição
app.use(express.json());
app.use(routes);


app.listen(3333);
console.log("API Rodando...");
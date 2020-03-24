const express = require('express');

const routes = express.Router();

/*
* Tipos de parâmentros:
* Query Params: Parametros nomeados enviados na rota apos "?" (filtros, paginações)
* Route Params: Paramentos utilizados para identificar recursos (id)
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

routes.get('/users', (req, res) => {
    return res.json({
        Evento: "Semana OmniStack 11.0",
        Aluno: "David Borges",
        Status: "API rodando", Port
    });

});

module.exports = routes;
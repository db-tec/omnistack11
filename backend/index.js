const express  = require('express'); 

const app = express();

app.get('/', (req, res) => {
    return res.json({
        Evento: "Semana OmniStack 11.0",
        Aluno: "David Borges"
    })

});

app.listen(3333);
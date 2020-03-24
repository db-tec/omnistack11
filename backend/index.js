const express  = require('express'); 
const Port = 3333;

const app = express();

app.get('/', (req, res) => {
    return res.json({
        Evento: "Semana OmniStack 11.0",
        Aluno: "David Borges",
        Status: "API rodando", Port
    })

});


app.listen(Port);
console.log("API Rodando na Porta:", Port);
const express = require('express');

const app = express();

app.get("/", (request, response) => {
    return response.json({
        evento: 'semana omniStack 11.0',
        aluno : 'Julio Lopes'
    });
})

app.listen(3333);
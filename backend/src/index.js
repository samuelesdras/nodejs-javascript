const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);




app.get('/users', (request, response) =>{
    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Um dia vou vencer!!',
        aluno: 'Samuel e Caio do papai!',
        resposta: "get"
    });
});


app.listen(3333);
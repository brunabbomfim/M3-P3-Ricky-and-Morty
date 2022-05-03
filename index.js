require('dotenv').config();//Declaração require para importar o dotenv
const express = require('express'); //Declaração require para importar o express
const cors = require('cors'); //Declaração require para importar o cors
const app = express(); // Execução do express
const route = require('./src/routes/personagens.routes'); //Declaração require para importar a pasta routes
const connectToDatabase = require('./src/database/database'); //Declaração require para importar a pasta database
const port = process.env.PORT || 3000;
connectToDatabase(); // Chamando a função
app.use(cors()); // Reconhecendo o cors nas requisições
app.use(express.json()); // Reconhecendo o formato JSON nas requisições
app.use('/personagens', route); // Conecta a todas as rotas relacionadas a "personagens"

app.listen(port, () => {
    console.log(`Servidor rodando em https: localhost: ${port}`);
});

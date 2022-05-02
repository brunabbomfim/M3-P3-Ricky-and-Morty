const express = require('express'); //Declaração require para importar o express
const cors = require('cors'); //Declaração require para importar o cors
const port = 3000;
const app = express(); // Execução do express
const route = require('./src/routes/personagens.routes'); //Declaração require para importar a pasta routes
const connectToDatabase = require('./src/database/database'); //Declaração require para importar a pasta database
connectToDatabase(); // Chamando a função
app.use(cors()); // Reconhecendo o cors nas requisições
app.use(express.json()); // Reconhecendo o formato JSON nas requisições
app.use('/personagens', route); // Conecta a todas as rotas relacionadas a "personagens"

app.get('/', (req,res) => {
    res.send('Hello Word!')
});
app.listen(port, () => {
    console.log(`Servidor rodando em https: localhost: ${port}`);
});

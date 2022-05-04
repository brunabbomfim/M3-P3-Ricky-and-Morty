const express = require('express'); //Declaração require para importar o express
const router = express.Router(); // Chamando o método .Router()
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('../../swagger.json');
// Requisição para trazer as funções do controller
const personagensController = require('../controllers/personagens.controller'); 
// Requisição para trazer as funções do middlewar
const { validId , validObjectBody } = require('../middlewares/personagens.middlewares')

// Chamando as funções do controller
router.get('/all', personagensController.findPersonagensController);
router.get('/find/:id', validId, personagensController.findPersonagemByIdController);
router.post('/create', validObjectBody, personagensController.createPersonagemController);
router.put('/update/:id', validId , validObjectBody, personagensController.updatePersonagemController);
router.delete('/delete/:id', validId, personagensController.deletePersonagemController);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
// Exportando as funções
module.exports = router;

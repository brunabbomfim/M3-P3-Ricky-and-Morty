const mongoose = require('mongoose');
// Requisição para trazer as funções do Service
const personagensService = require('../services/personagens.service');

//  Guardando resultado em uma constante para enviar como resposta da requisição
const findPersonagensController = async (req,res) => {
    const allPersonagens = await personagensService.findPersonagensService();
    res.send(allPersonagens);
};
const findPersonagemByIdController = async (req,res) => {
    const chosenPersonagem = await personagensService.findPersonagemByIdService(req.params.id);
    res.send(chosenPersonagem);
};
const createPersonagemController = async (req,res) => { 
    var personagem = await personagensService.createPersonagemService(req.body);
        res.send(personagem);
};
const updatePersonagemController = async (req,res) => {
    const chosenPersonagem = await personagensService.findPersonagemByIdService(req.params.id);
    if (!chosenPersonagem) {
        return res.status(404).send({ message: "Personagem não encontrado!" })
    }  
    const updatedPersonagem = await personagensService.updatePersonagemService(req.params.id, req.body);
    res.send(updatedPersonagem);
};
const deletePersonagemController = async (req,res) => {
    const chosenPersonagem = personagensService.findPersonagemByIdService(req.params.id);
        if (!chosenPersonagem) {
            return res.status(404).send({ message: "Personagem não encontrado!" })
        }  
    await personagensService.deletePersonagemService(req.params.id);
    res.send({message: 'Personagem excluído com sucesso!'});  
};
// Exportando as funções
module.exports = {
    findPersonagensController,
    findPersonagemByIdController,
    createPersonagemController,
    updatePersonagemController,
    deletePersonagemController
};

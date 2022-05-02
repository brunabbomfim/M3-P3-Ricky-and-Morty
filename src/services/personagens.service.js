const Personagem = require('../models/Personagem');
// Retorna os dados do banco com todas as paletas
const findPersonagensService = async () => {
    const personagens = await Personagem.find();
    return personagens;
};
// Retorna o objeto por id
const findPersonagemByIdService = async (id) => {
    const personagem = await Personagem.findById(id);
    return personagem;
};
// Adiciona o objeto criado ao array
const createPersonagemService = async (personagem) => {
    const newPersonagem = await Personagem.create(personagem);
    return newPersonagem;
};
// Edita o personagem por id
const updatePersonagemService = async (id, personagemEdit) => {
    const personagemAtual = await Personagem.findByIdAndUpdate(id, personagemEdit);
    return (personagemAtual);
};
// Exclui personagem por id
const deletePersonagemService = async (id) => {
    return await Personagem.findByIdAndDelete(id);
};

// Exportando as funções
module.exports =  {
    findPersonagensService,
    findPersonagemByIdService,
    createPersonagemService,
    updatePersonagemService,
    deletePersonagemService
};

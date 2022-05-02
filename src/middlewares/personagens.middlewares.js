const mongoose = require('mongoose');

const validId = (req, res, next) => {
    const idParam = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(idParam)) {
            return res.status(400).send({ message: 'Id inválido!' });
        }
        next();
}
const validObjectBody = (req, res, next) => {
      const personagem = req.body;
        if (
            !req.body || 
            !req.body.nome || 
            !req.body.descricao || 
            !req.body.imagem
            )
        {
            return res
            .status(400)
            .send({ message: 'Envie o todos os campos da paleta!' });
        }
        next();
}
    
    module.exports = {
      validId,
      validObjectBody,
    };

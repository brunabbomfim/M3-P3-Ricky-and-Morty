const mongoose = require('mongoose');

const validId = (req, res, next) => {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send({ message: 'Id inválido!' });
        }
        next();
}
const validObjectBody = (req, res, next) => {
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

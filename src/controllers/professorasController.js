const professoras = require("../model/professoras.json")

exports.get = (req, res) => {
    res.status(200).send(professoras)
}

exports.getNome = (req, res) => {
    const nome = req.params.nome
    res.status(200).send(professoras.find(nomeProf => nomeProf.nome == nome))
}
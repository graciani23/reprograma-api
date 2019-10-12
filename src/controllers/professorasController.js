const professoras = require("../model/professoras.json")

exports.get = (req, res) => {
    res.status(200).send(professoras)
}

// exports.getSemCpf = (req, res) => {
//     const arrProfas = []
//     for (let i=0; i<professoras.length; i++) {
//         const semCpf = {}
//         semCpf.id = professoras[i].id
//         semCpf.nome = professoras[i].nome
//         semCpf.especialidade = professoras[i].especialidade
//         semCpf.signo = professoras[i].signo
//         arrProfas.push(semCpf)
//     }
//     res.status(200).send(arrProfas)
// }

// exports.getSemCpf = (req, res) => {
//     const profSemCpf = professoras.map(item => {
//         item.cpf = '********'
//         return item
//     })
//     res.status(200).send(profSemCpf)'
// }

exports.getSemCpf = (req, res) => {
    const profSemCpf = professoras.map(item => {
        delete item.cpf
        return item
    })
    res.status(200).send(profSemCpf)
}

exports.getById = (req, res) => {
    const id = req.params.id
    const profSemCpf = professoras.map(item => {
        delete item.cpf
        return item
    })
    const profas = profSemCpf.find(prof => prof.id == id)
    res.status(200).send(profas)

}

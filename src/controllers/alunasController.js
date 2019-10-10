const alunas = require("../model/alunas.json")


exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(alunas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if (id < 1 && id > 17) {
        res.send('Id maior que a quantidade de garotas')
    }
    console.log(id)
    res.status(200).send(alunas.find(aluna => aluna.id == id))
}

exports.getBooks = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)

    if (!aluna) {
        res.send('Não encontrei esta garota')
    }

    const livros = aluna.livros
    const livrosLidos = livros.filter(livro => livro.leu == 'true')
    const titulo = livros.map(livro => livro.titulo)
    
    res.status(200).send(livrosLidos)
}

exports.getSp = (req, res) => {
    const sp = alunas.filter(nascSP => nascSP.nasceuEmSp == 'true')
    const paulista = sp.map(nascSP => nascSP.nome)
    
    
    res.status(200).send(paulista)
}




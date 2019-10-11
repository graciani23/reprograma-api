const express = require("express")
const app = express()

app.all('*', function(req, res, next) {
    console.log('passamos pelo app')
    next()
})
// rota
const index = require('./routes/index')

const alunas = require('./routes/alunasRoute')

const professoras = require('./routes/professorasRoute.js')

app.use('/', index)
app.use("/alunas", alunas)
app.use('/professoras', professoras)

module.exports = app
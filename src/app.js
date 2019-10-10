const express = require("express")
const app = express()

app.all('*', function(req, res, next) {
    console.log('passamos pelo app')
    next()
})
// rota
const index = require('./routes/index')
app.use('/', index)
const alunas = require('./routes/alunasRoute')

app.use("/alunas", alunas)

module.exports = app
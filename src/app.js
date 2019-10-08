const express = require("express")
const app = express()

// rota
const index = require('./routes/index')
app.use('/', index)
const alunas = require('./routes/alunasRoute')

app.use("/alunas", alunas)

module.exports = app
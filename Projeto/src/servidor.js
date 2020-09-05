const porta = 3003

const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(BodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos',(req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON 
})

app.put('/produtos/:id',(req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.body.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON 
})

app.delete('/produtos/:id',(req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON 
})


  

app.listen(porta, ()=>{
    console.log(`Servidor sendo executado na porta ${porta}.`)
})
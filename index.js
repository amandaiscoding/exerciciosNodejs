const express = require('express')
const { somar } = require('./exercicios/ex1.js')
const { salario } = require('./exercicios/ex2.js')
const { pesos } = require('./exercicios/ex3.js')
const { fahrenheit } = require('./exercicios/ex4.js')
const { quilometros } = require('./exercicios/ex5.js')
const { tempo } = require('./exercicios/ex6.js')
const { mcm } = require('./exercicios/ex7.js')
const { tabuada } = require('./exercicios/ex8.js')
const { idade } = require('./exercicios/d0.js')
const { troca } = require('./exercicios/d1.js')
const { medianota } = require('./exercicios/ex9.js')
const { imc } = require('./exercicios/ex10.js')
const { calc } = require('./exercicios/ex11.js')
const { posneg } = require('./exercicios/ex12.js')
const { imppar } = require('./exercicios/ex13.js')
const { maiormenor } = require('./exercicios/ex14.js')
const { imposto } = require('./exercicios/ex16.js')
const { menor } = require('./exercicios/d3.js')
const { bissexto } = require('./exercicios/d4.js')
const { mediaPomderada } = require('./exercicios/ex17.js')
const { carro } = require('./exercicios/ex18.js')
const { calculoJuros } = require('./exercicios/ex19.js')
const { pecas } = require('./exercicios/ex20.js')
const { crime } = require('./exercicios/ex21.js')
const { multa } = require('./exercicios/ex22.js')
const { batata } = require('./exercicios/ex23rep.js')
const { tabuadaFor } = require('./exercicios/ex24arrays.js')
const { negArray } = require('./exercicios/ex28arrays.js')
const { combustivel } = require('./exercicios/ex31.js')
const { semana } = require('./exercicios/ex32.js')
const { mes } = require('./exercicios/ex33.js')
const { letras } = require('./exercicios/ex34.js')


const app = express(); 
const port = 3000; 
app.use(express.json()); // necessário pro método post 

app.get('/api/0', (req, res) => {
    res.status(200).json({
        message: `Hello World!`
    })
})

app.post('/api/ex1', (req, res) => {
    const result = somar(req.body.num1, req.body.num2)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex2', (req, res) => {
    const result = salario(req.body.valorHora, req.body.horas)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex3', (req, res) => {
    const result = pesos(req.body.p1, req.body.p2, req.body.p3, req.body.p4, req.body.p5)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex4', (req, res) => {
    const result = fahrenheit(req.body.celsius)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex5', (req, res) => {
    const result = quilometros(req.body.milhas)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex6', (req, res) => {
    const result = tempo(req.body.segundos)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex7', (req, res) => {
    const result = mcm(req.body.quilometros)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex8', (req, res) => {
    const result = tabuada(req.body.numero)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/d0', (req, res) => {
    const result = idade(req.body.anos)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/d1', (req, res) => {
    const result = troca(req.body.a, req.body.b)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/d2', (req, res) => {
    const result = maior(req.body.num1, req.body.num2)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex9', (req, res) => {
    const result = medianota(req.body.n1, req.body.n2, req.body.n3)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex10', (req, res) => {
    const result = imc(req.body.sexo, req.body.altura)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex11', (req, res) => {
    const result = calc(req.body.operac, req.body.num1, req.body.num2)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex12', (req, res) => {
    const result = posneg(req.body.num)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex13', (req, res) => {
    const result = imppar(req.body.num)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex14', (req, res) => {
    const result = maiormenor(req.body.num1, req.body.num2)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/d3', (req, res) => {
    const result = menor(req.body.num1, req.body.num2,req.body.num3)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex16', (req, res) => {
    const result = imposto(req.body.dep, req.body.renda)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/d4', (req, res) => {
    const result = bissexto(req.body.ano)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex17', (req, res) => {
    const result = mediaPomderada(req.body.nota1, req.body.nota2, req.body.nota3)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex18', (req, res) => {
    const result = carro(req.body.custoFabrica)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex19', (req, res) => {
    const result = calculoJuros(req.body.capital, req.body.taxa, req.body.dias)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex20', (req, res) => {
    const result = pecas(req.body.ipi, req.body.valor1, req.body.quant1, req.body.valor2, req.body.quant2, req.body.cod1, req.body.cod2)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex21', (req, res) => {
    const result = crime(req.body.p1, req.body.p2, req.body.p3, req.body.p4, req.body.p5, req.body.p6, req.body.p7, req.body.p8)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex22', (req, res) => {
    const result = multa(req.body.velPermitida, req.body.velPraticada)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex23rep', (req, res) => {
    const result = batata(req.body.num)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex24arrays', (req, res) => {
    const result = tabuadaFor(req.body.num)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex28arrays', (req, res) => {
    const result = negArray(req.body.numeros)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex31', (req, res) => {
    const result = combustivel(req.body.numero)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex32', (req, res) => {
    const result = semana(req.body.numero)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex33', (req, res) => {
    const result = mes(req.body.numero)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/ex34', (req, res) => {
    const result = letras(req.body.letra)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})


app.listen(port, () => { 
    console.log('Servidor rodando na porta ' + port)  
    // ou (`Servidor rodando na porta ${port}`) 
})  
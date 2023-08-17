/* Leia o valor da hora do trabalhador e a quantidade de horas trabalhadas.
Imprima o valor que o trabalhador deverá receber ao final do mês. */

import express from "express";
const app = express();

app.get("/salario", (req, res) => {
    const valor = parseFloat(req.query.valor);
    const horas = parseInt(req.query.horas)
    const salario = valor * horas;

    res.json({ message: `Salário final: ${salario}`});
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
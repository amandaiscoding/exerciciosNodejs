// Solicite dois numeros reais, realize a soma; Imprima o resultado.

import express from "express";
const app = express();

app.get("/soma", (req, res) => {
    const numero1 = parseFloat(req.query.numero1);
    const numero2 = parseFloat(req.query.numero2)
    const resultado = numero1 + numero2;
// exemplo: /soma?numero1=5&numero2=10

    res.json({ message: `${numero1} + ${numero2} = ${resultado}`});
// {"message":"5 + 10 = 15"}
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

function negArray(numeros) {
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            contador++;
        }
    }
    return contador;
}

/* exemplo de array colocado no postman: 
{
    "numeros": [5, -3, 0, -10, 12, -7, 8, 0, -2, 15]
}
*/

module.exports = { negArray };
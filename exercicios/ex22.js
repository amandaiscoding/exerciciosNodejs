function multa(velPermitida, velPraticada) {
    const excesso = velPraticada - velPermitida
 
    if (excesso > 0) {
        if (excesso <= 0.2 * velPermitida) {
            const total = 102.0;
            return `Motorista multado em R$ ${total}.`
            }
            else {
            const total = 500.0;
                return `Motorista multado em R$ ${total}.`
            }
        }
        else {
            cout << "Motorista dentro da velocidade permitida.";
        }
}

module.exports = {multa}
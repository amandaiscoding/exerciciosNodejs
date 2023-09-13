function letras(letra) {
    switch (letra) {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            return "Vogal";
        default:
            return "Consoante";
    }
}

module.exports = {letras}
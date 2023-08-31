function crime(p1, p2, p3, p4, p5, p6, p7, p8) {
    const perguntas = [p1, p2, p3, p4, p5, p6, p7, p8];
    let contador = 0

    for (let i = 0; i < perguntas.length; i++) {
        if (perguntas[i] === 'S') {
            contador++;
        }
    }

    if (contador == 4) {
		return "Classificação: suspeito.";
	} else if (contador >= 5 && contador <= 7) {
		return "Classificação: possível criminoso.";
	} else if (contador == 8) {
		return "Classificação: assassino.";
	} else {
		return "Classificação: inocente.";
	}
}

module.exports = {crime}
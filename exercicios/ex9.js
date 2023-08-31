function medianota(n1, n2, n3) {
    const media = (n1 + n2 + n3) / 3;
    if (media >= 7) {
        return `Média: ${media}; aprovado.`
    } else if (media >= 5) {
		return `Média: ${media}; recuperação.`
	} else {
		return `Reprovado.`
}
}

module.exports = {medianota}

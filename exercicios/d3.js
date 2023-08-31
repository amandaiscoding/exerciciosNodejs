function menor(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return `${num1} é menor.`
    } else if (num2 < num1 && num2 < num3) {
        return `${num2} é menor.`
    } else {
        return `${num3} é menor.`
    }
}

module.exports = {menor}
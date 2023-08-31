function calc(operac, num1, num2) {
    if(operac == "+") {
        return num1 + num2
    } else if(operac == "-") {
        return num1 - num2
    } else if(operac == "/") {
        return num1 / num2
    } else if(operac == "*") {
        return num1 * num2
    } else {
        return `Operação inválida`
    }
}

module.exports = {calc}
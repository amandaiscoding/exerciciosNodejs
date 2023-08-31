function imppar(num) {
    if(num % 2 == 0) {
        return `Par`
    } else {
        return `Ímpar`
    }
}

module.exports = {imppar}
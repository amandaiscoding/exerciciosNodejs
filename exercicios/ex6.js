function tempo(segundos) {
    return `Horas: ${segundos / 3600}; Minutos: ${segundos / 60}; Segundos: ${segundos}.` 
}

module.exports = {tempo}
function imposto(dep, renda) {
    const salarioMin = 1100
    const descontoDep = 0.05 * salarioMin;
    const rendaDesc = renda - (dep * descontoDep);
    
    if (rendaDesc <= 2 * salarioMin) {
        return 0
    } else if (rendaDesc <= 3 * salarioMin) {
        return 0.05 * rendaDesc
    } else if (rendaDesc <= 5 * salarioMin) {
        return 0.1 * rendaDesc
    } else if (rendaDesc <= 7 * salarioMin) {
        return 0.15 * rendaDesc
    } else {
        return 0.2 * rendaDesc  
    }
}

module.exports = {imposto}
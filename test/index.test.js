const { describe, expect, it } = require('@jest/globals') 
const { somar } = require('../exercicios/ex1.js')
const { salario } = require('../exercicios/ex2.js');
const { fahrenheit } = require('../exercicios/ex4.js');
const { quilometros } = require('../exercicios/ex5.js');
const { calc } = require('../exercicios/ex11.js');
const { posneg } = require('../exercicios/ex12.js');
const { carro } = require('../exercicios/ex18.js');
const { batata } = require('../exercicios/ex23rep.js');
const { negArray } = require('../exercicios/ex28arrays.js');
const { combustivel } = require('../exercicios/ex31.js');
const { semana } = require('../exercicios/ex32.js');
const { mes } = require('../exercicios/ex33.js');
const { letras } = require('../exercicios/ex34.js');

describe('Teste do primeiro exercício', () => { 
// Executado antes de TODOS os testes 
    beforeAll(async () => { 
    console.info('Iniciando TDD com jest!'); 
    }); 

// Executado após TODOS os testes 
    afterAll(() => { 
        console.info('Encerrados os testes'); 
    }); 

// Teste
    it('Should sum two numbers', () => { 
        const result = somar(2, 2) 
        expect(result).toBe(4); 
        })
})

describe('Teste do exercício 2', () => { 
    it('Should multiply two numbers', () => { 
       const result = salario(50, 4) 
       expect(result).toBe(200); 
    })
})

describe('Teste do exercício 4', () => { 
    it('Should convert a ºC temperature to ºF according to the formula', () => { 
       const result = fahrenheit(32) 
       expect(result).toBe(89.6); 
    })
})

describe('Teste do exercício 5', () => { 
    it('Should convert miles to kilometers according to the formula', () => { 
       const result = quilometros(80) 
       expect(result).toBe(128.7472); 
    })
})

describe('Teste do exercício 11', () => { 
    it('Should calculate two numbers according to the chosen operation', () => { 
       const result = calc(`+`, 4, 4) 
       expect(result).toBe(8); 
    })
})

describe('Teste do exercício 12', () => { 
    it('Should check if the number is positive or negative', () => { 
       const result = posneg(-15) 
       expect(result).toBe(`Negativo`); 
    })
})

describe('Teste do exercício 18', () => { 
    it('Should calculate the final price', () => { 
       const result = carro(22000) 
       expect(result).toBe(38060); 
    })
})

describe('Teste do exercício 23 (estrutura de repetição)', () => { 
    it('Should return the word Batata', () => { 
       const result = batata(1) 
       expect(result).toBe(`Batata`); 
    })
})

describe('Teste do exercício 28 (arrays)', () => { 
    it('Should count the negative numbers in an array', () => { 
       const result = negArray([5, -3, 0, -10, 12, -7, 8, 0, -2, 15]) 
       expect(result).toBe(4); 
    })
})

describe('Teste do exercício 31', () => { 
    it('Should return the correct fuel', () => { 
       const result = combustivel(3) 
       expect(result).toBe(`Diesel`); 
    })
})

describe('Teste do exercício 32', () => { 
    it('Should return the correct day of the week', () => { 
       const result = semana(5) 
       expect(result).toBe(`Quinta`); 
    })
})

describe('Teste do exercício 33', () => { 
    it('Should return the correct month', () => { 
       const result = mes(10) 
       expect(result).toBe(`Outubro`); 
    })
})

describe('Teste do exercício 34', () => { 
    it('Should check if the letter is a vowel or a consonant', () => { 
       const result = letras(`B`) 
       expect(result).toBe(`Consoante`); 
    })
})

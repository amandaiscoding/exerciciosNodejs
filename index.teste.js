import { describe, expect, it } from '@jest/globals'; 
import { ex1 } from "../exercicios/ex1"; 

describe('Testes do primeiro exercício', () => { 
 // Executado antes de TODOS os testes 
 beforeAll(async () => { 
 console.info('Iniciando TDD com jest!'); 
 }); 

 // Executado após TODOS os testes 
 afterAll(() => { 
 console.info('Encerrados os testes'); 
 }); 

 // Teste: 
 it('Should sum two numbers', () => { 
 const result = ex1(1, 2) 
 expect(result).toBe(3); 
 }) 
}) 
const { adicao, subtracao, multiplicacao, divisao } = require('../src/funcoes');

test('Testa a função de adição', () => {
  expect(adicao(2, 3)).toBe(5);
});

test('Testa a função de subtração', () => {
  expect(subtracao(5, 3)).toBe(2);
});

test('Testa a função de multiplicação', () => {
  expect(multiplicacao(2, 3)).toBe(6);
});

test('Testa a função de divisão', () => {
  expect(divisao(6, 3)).toBe(2);
});

test('Testa a divisão por zero', () => {
  expect(() => divisao(6, 0)).toThrow("Divisão por zero não é permitida");
});
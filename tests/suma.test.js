function suma(a, b) {
  return a + b
}

test('la función suma debe devolver la suma correcta', () => {
  expect(suma(2, 3)).toBe(5)
})

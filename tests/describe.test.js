function suma(a, b) {
  return a + b
}

function resta(a, b) {
  return a - b
}

describe('Operaciones matemáticas', () => {
  test('Debe sumar correctamente', () => {
    expect(suma(2, 2)).toBe(4)
  })

  test('Debe restar correctamente', () => {
    expect(resta(10, 5)).toBe(5)
  })
})

test('la suma de decimales debe ser aproximadamente 0.3', () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3)
  expect(1.234568).toBeCloseTo(1.23, 2)
})

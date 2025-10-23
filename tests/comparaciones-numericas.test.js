const tiempoEjecucion = 45
const limiteTiempo = 50

test('El tiempo de ejecución debe ser menor a 50', () => {
  expect(tiempoEjecucion).toBeLessThan(limiteTiempo)
  expect(tiempoEjecucion).toBeGreaterThanOrEqual(40)
})

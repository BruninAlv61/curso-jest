const tienePermiso = 1
const nombreProducto = 'laptop'

test('El valor debe ser truthy', () => {
  expect(tienePermiso).toBeTruthy()
  expect(nombreProducto).toBeTruthy()
})

const ingredientesPizza = ['tomate', 'queso', 'harina', 'jamon']

test('Validar que la pizza tenga queso y jamon', () => {
  expect(ingredientesPizza).toContain('queso')
  expect(ingredientesPizza).toContain('jamon')
})

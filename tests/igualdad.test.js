test('comparar valores primitivos con tobe', () => {
  expect(5).toBe(5)
  expect('Hola mundo').toBe('Hola mundo')
  expect(true).toBe(true)
})

test('comparar objetos con toequal', () => {
  const obj1 = {
    nombre: 'brunin'
  }
  const obj2 = {
    nombre: 'brunin'
  }

  expect(obj1).toEqual(obj2)
})

test('negación con not', () => {
  expect(5).not.toBe(3)
  expect(true).not.toBe(false)
})

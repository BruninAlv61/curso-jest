let usuarios = []

beforeAll(() => {
  console.log('Antes de todas las pruebas')
})

beforeEach(() => {
  usuarios = ['Ana', 'Luis', 'Carlos']
  console.log('Antes de cada prueba individual')
})

afterAll(() => {
  console.log('Después de todas las pruebas')
})

afterEach(() => {
  console.log('Después de cada prueba individual')
})

test('La lista contiene a Ana', () => {
  expect(usuarios).toContain('Ana')
})

test('La lista contiene a Luis', () => {
  expect(usuarios).toContain('Luis')
})

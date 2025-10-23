function buscarUsuario(id) {
  if (id > 100) {
    return null
  }
  return { nombre: 'Esteban', apellido: 'Quito' }
}

test('El usuario no encontrado debe ser null', () => {
  expect(buscarUsuario(120)).toBeNull()
})

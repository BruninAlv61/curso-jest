const listaTareas = ['Comprar pan', 'LLamar al médico', 'Estudiar Jest']

const miNombre = 'Bruno'

test('La lista de tareas tiene 3 elementos', () => {
  expect(listaTareas).toHaveLength(3)
})

test('Mi nombre tiene 5 letras', () => {
  expect(miNombre).toHaveLength(5)
})

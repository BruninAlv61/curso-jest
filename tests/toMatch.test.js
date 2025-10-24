const urlSitio = 'https://brunin-portfolio.netlify.app/sobre-mi'
const mensajeValidacion = 'Error: contraseña debe tener más de 9 caracteres'

test('Validar si el sitio es seguro', () => {
  expect(urlSitio).toMatch('https')
  expect(mensajeValidacion).toMatch(/^Error:/) // <-- Expresión regular,
  // busca que el mensaje comience con "Error:"
})

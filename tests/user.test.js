const { crearUsuario } = require('../src/user')

test('Debe coincidir con el snapshot', () => {
    const usuario = crearUsuario('Bruno', 30)
    expect(usuario).toMatchSnapshot()
})
function obtenerUsuario(id, callback) {
    setTimeout(() => {
        callback({ id, nombre: 'Juan' })
    }, 500)
}

test('Obtener un usuario con callback', (done) => {
    obtenerUsuario(1, (usuario) => {
        expect(usuario).toEqual({ id: 1, nombre: 'Juan' })
        done()
    })
})
function ObtenerNombreExitoso() {
    return Promise.resolve('Mochuelo')
}

function ObtenerNombreFallido() {
    return Promise.reject('Error al obtener el nombre')
}

test('Se obtiene el nombre correctamente', () => {
    return expect(ObtenerNombreExitoso()).resolves.toBe('Mochuelo')
})

test('Error al obtener el nombre', () => {
    return expect(ObtenerNombreFallido()).rejects.toMatch('Error')
})
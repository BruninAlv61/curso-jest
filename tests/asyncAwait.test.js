function obtenerSaludo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('HOLA, JEST!')
        }, 500)
    })
}

function obtenerError() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('Error al obtener algo')
        }, 500)
    })
}

test('obtener saludo async/await', async () => {
    const saludo = await obtenerSaludo()
    expect(saludo).toMatch('HOLA, JEST!')
})

test('obtener saludo async/await con .resolves', async () => {
    await expect(obtenerSaludo()).resolves.toMatch('HOLA, JEST!')
})

test('obtener error async/await con try/catch', async () => {
    try {
        await obtenerError()
    } catch (error) {
        expect(error).toMatch('Error al obtener algo')
    }
})

test('obtener error async/await con .rejects', async () => {
    await expect(obtenerError()).rejects.toMatch('Error al obtener algo')
})
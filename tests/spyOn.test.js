const db = require('../src/spyOn')

test('Espiando funciones con jest.spyOn()', () => {
    const spy = jest.spyOn(db, 'guardar')
    const resultado = db.guardar('Carrascal')

    expect(resultado).toBe('Carrascal guardado en la base de datos')
    expect(spy).toHaveBeenCalled() // Verifica que la función fue llamada
    expect(spy).toHaveBeenCalledWith('Carrascal') // Verifica el argumento
})


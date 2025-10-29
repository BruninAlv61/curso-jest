const { suma } = require('../src/math')

test('Inspección de llamadas con jest.fn()', () => {
    const mockFn = jest.fn(suma)
    const resultado = mockFn(2, 3)

    expect(resultado).toBe(5) // Guardamos resultado y lo verificamos
    expect(mockFn).toHaveBeenCalled() // Fue llamada al menos una vez
    expect(mockFn).toHaveBeenCalledWith(2, 3) // Fue llamada con argumentos específicos
})
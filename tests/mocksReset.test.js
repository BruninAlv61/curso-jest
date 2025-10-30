test('Usar mockclear y mockreset', () => {
    const mockFn = jest.fn().mockReturnValue('Hola')
    mockFn()
    mockFn()

    expect(mockFn).toHaveBeenCalledTimes(2)

    mockFn.mockClear() // Limpia el historial de llamadas
    expect(mockFn).toHaveBeenCalledTimes(0)

    expect(mockFn()).toMatch('Hola')
    mockFn.mockReset() // Resetea la implementación del mock
    expect(mockFn()).toBeUndefined()
})


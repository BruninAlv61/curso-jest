test('Usar jest.fn para simular una función', ()=> {
    const mockFunc = jest.fn() // Creamos una función falsa
    mockFunc(2, 3) // Llamamos a la función falsa con argumentos de prueba
    mockFunc(3, 4)
    expect(mockFunc).toHaveBeenCalledTimes(2) // Verificamos cuántas veces se llamó
    expect(mockFunc).toHaveBeenCalledWith(2, 3)
    expect(mockFunc).toHaveBeenCalledWith(3, 4)
})
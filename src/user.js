function crearUsuario(nombre, edad) {
    return { 
        nombre,
        edad,
        activo: true,
        rol: 'usuario libre liberador'
    }
}

module.exports = { crearUsuario }
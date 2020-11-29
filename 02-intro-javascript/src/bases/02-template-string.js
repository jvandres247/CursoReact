//Template strings

const nombre = 'Andres';
const apellido = 'Velazquez';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)
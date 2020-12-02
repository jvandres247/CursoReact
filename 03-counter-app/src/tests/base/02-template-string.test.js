import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js',()=>{
    test('getSaludo debe retornar Hola Andres', ()=>{
        const nombre = 'Andres';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre + '!');
    })

    //getSaludo debe retornar Hola  Carlos! si no hay argumento nombre

    test('getSaludo debe retornar Hola Carlos, si no hay argumento', ()=>{
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');
    })
})
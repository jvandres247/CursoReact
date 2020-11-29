//Destructuracion de objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
    rango: 'Soldado',
};

const {nombre, edad, clave} = persona;

const usarContexto = ({nombre, edad, clave, rango='Capitan'}) => {
 //console.log(nombre, edad, rango)
 return {
     nombreClave: clave,
     anios: edad,
     latlng:{
         lat: 14.121212,
         lng: -12.12121,
     }
 }
}

const {nombreClave, anios, latlng:{lat, lng}} = usarContexto(persona);
console.log(nombreClave, anios);
console.log(lat, lng);


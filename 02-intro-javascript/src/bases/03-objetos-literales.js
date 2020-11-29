//Objetos literales
const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
      ciudad: 'New York',
      zip: 21122,
      lat: 14.3232,
      lng: 34.12121
  }
};

/* console.table({
    persona
}); */
console.log(persona);

//const persona2 = persona; //Asignacion de referencia

const persona2 = {...persona} //clon del objeto
persona2.nombre = 'Peter'
console.log(persona);
console.log(persona2);

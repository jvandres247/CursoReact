//Funciones

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
  };
  
  const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
  };
  
  const saludar3 = (nombre) => `Hola, ${nombre}`;
  
  const saludar4 = () => `Hola mundo`;
  
  console.log(saludar4());
  
  const getUser = () => ({
    uid: "ABC123",
    username: "El_Papi502",
  });
  
  console.log(getUser());
  
  //Tarea
  //1.-Transformar a una funcion de flecha
  //2.-Retornar un objeto implicito
  //3.-Pruebas
  function getUsuarioActivo(nombre) {
    return {
      uid: "ABC124",
      username: nombre,
    };
  }
  const usuarioActivo = getUsuarioActivo("Andres");
  console.log(usuarioActivo);
  
  //Transformar a una funcion de flecha
  
  const getUsuarioActivo2 = (nombre) => ({
      uid: "ABC125",
      username: nombre,
  });
  
  const usuarioActivo2 = getUsuarioActivo2("Juan");
  console.log(usuarioActivo2);
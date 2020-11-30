//Promesas
import { getHeroeById2 } from "./08-import-export-funciones";

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById2(2);
    //resolve(heroe);
    reject("No se pudo encontrar el heroe");
  }, 2000);
});

promesa
  .then((heroe) => {
    console.log("El heroe es: ", heroe);
  })
  .catch((err) => console.log(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById2(id);
      if (heroe ? resolve(heroe) : reject("No se pudo encontrar el heroe"));
      //resolve(heroe);
      //reject("No se pudo encontrar el heroe");
    }, 2000);
  });
};

getHeroeByIdAsync(1)
  .then(console.log)
  .catch(console.log);

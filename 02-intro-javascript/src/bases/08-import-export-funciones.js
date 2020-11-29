import {heroes} from '../data/heroes';

const getHeroeById = (id) => {
    return heroes.find((heroe) => {
        if(heroe.id === id) {
            return true;
        }else{
            return false;
        }
    });
}

console.log(getHeroeById(2));

const getHeroeById2 = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

console.log(getHeroeById2(1));

const getHeroeByOwner = (owner) =>
{
    return heroes.filter(heroe => heroe.owner === owner);
}

console.log(getHeroeByOwner('DC'));
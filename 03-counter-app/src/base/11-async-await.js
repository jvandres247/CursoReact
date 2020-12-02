export const getImagen = async() => {

    try {

        const apiKey = '4qsDHw6sAyBUXIJNUp0e34MNII4av8nu';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url

    } catch (error) {
        return 'No Existe'
    }
}





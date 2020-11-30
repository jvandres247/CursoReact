//Async - Await

const getImagePromise = () => {
    return new Promise((resolve, reject) => {
      resolve("https://www.google.com");
    });
  };

  getImagePromise().then(console.log);

  const getImage = async () => {
    const apiKey = "4qsDHw6sAyBUXIJNUp0e34MNII4av8nu";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  };

  getImage();
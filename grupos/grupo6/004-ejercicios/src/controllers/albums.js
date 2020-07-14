import express, { response } from 'express';
import fetch from 'node-fetch';

var albumsApi = express.Router();
//('https://jsonplaceholder.typicode.com/users/'
albumsApi.get('/', function (req, res) {
  fetch('https://jsonplaceholder.typicode.com/albums/')
  .then(response=>response.json())
  .then(albums => {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response2 => response2.json())
    .then(user=>{
      let datosAlbum = albums.map(value => ({
        id: value.id,
        title: value.title,
        users: user.filter((usuarios) => usuarios.id === value.userId ),
      }));
      res.send(datosAlbum)
    });
    
  })
  .catch(error=> console.error('Error: ',error))
  .finally(()=>console.error('Success: ',response))
});

albumsApi.get('/:id', async function (req, res) {
  const albumsFetch= await fetch(`https://jsonplaceholder.typicode.com/albums/${req.params.id}/`);
  const albumsJSON= await albumsFetch.json();
  const fotosFetch= await fetch(`https://jsonplaceholder.typicode.com/albums/${req.params.id}/photos`);
  const fotosJSON= await fotosFetch.json();

  const resultadoFotos= await [albumsJSON].map( (albumFoto) =>({
    userId: albumFoto.userId,
    id:albumFoto.id,
    title:albumFoto.title,
    photos: fotosJSON.map((fotos)=>({
      id: fotos.id,
      title: fotos.title,
      url: fotos.url,
      thumbnailUrl: fotos.thumbnailUrl,
    })),

  }));
  res.send(resultadoFotos);
  
});

export default albumsApi;
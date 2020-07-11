import express from 'express';
import fetch from 'node-fetch';

let usersApi = express.Router();

usersApi.get('/', async function (req, res) {
  const fet = await fetch('https://jsonplaceholder.typicode.com/users/');
  const jsUser = await fet.json();
  const post = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const jsPost = await post.json();
  const albums = await fetch('https://jsonplaceholder.typicode.com/albums/');
  const jsAlbums = await albums.json();

  const lista = await jsUser.map((u) => ({
    user: u,
    albums: jsAlbums
      .filter((a) => a.userId === u.id)
      .map((aMap) => ({
        id: aMap.id,
        title: aMap.title,
      })),
    posts: jsPost
      .filter((p) => p.userId === u.id)
      .map((pMap) => ({
        id: pMap.id,
        title: pMap.title,
        body: pMap.body,
      })),
  }));

  res.send(lista);
});

export default usersApi;

import express from 'express';
const fetch = require('node-fetch');

var postApi = express.Router();

postApi.get('/', async function (req, res) {
  const [rawPosts, rawUsers] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts/'),
    fetch('https://jsonplaceholder.typicode.com/users/'),
  ]);

  const [posts, users] = await Promise.all([rawPosts.json(), rawUsers.json()]);

  let lista = posts.map((element) => ({
    id: element.id,
    title: element.title,
    body: element.body,
    user: users.filter((user) => user.id === element.userId),
  }));

  res.send(lista);
});

postApi.get('/:id', function (req, res) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}/`)
    .then((response) => response.json())
    .then((posts) => {
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${req.params.id}/comments/`
      )
        .then((response2) => response2.json())
        .then((comments) => {
          let lista = {
            userId: posts.userId,
            id: posts.id,
            title: posts.title,
            body: posts.body,
            posts: comments.map((value) => ({
              id: value.id,
              name: value.name,
              email: value.email,
              body: value.body,
            })),
          };
          res.send(lista);
        });
    });
});

export default postApi;

import express from 'express';
const fetch = require("node-fetch");

var postApi = express.Router();

postApi.get('/', function (req, res) {
    fetch('https://jsonplaceholder.typicode.com/posts/')
       .then(response => response.json())
        .then(posts => {
            fetch('https://jsonplaceholder.typicode.com/users/')
                .then(response2 => response2.json())
                .then(users => {

                    let lista = posts.map(value => {
                        let resultadoFinal = {
                        id: value.id,
                        title: value.title,
                        body: value.body,
                        user: users.filter((user) => user.id === value.userId ),
                        }
                        return resultadoFinal;
                    });
                    res.send(lista)
                })
        })
});


postApi.get('/:id', function (req, res) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}/`)
       .then(response => response.json())
        .then(posts => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}/comments/`)
                .then(response2 => response2.json())
                .then(comments => {
                    let lista =  {
                        userId: posts.userId,
                        id: posts.id,
                        title: posts.title,
                        body: posts.body,
                        posts:
                            comments.map(value => ({
                                id : value.id,
                                name: value.name,
                                email: value.email,
                                body: value.body
                            }))
                        }
                    res.send(lista)
                });
        })
})

export default postApi;

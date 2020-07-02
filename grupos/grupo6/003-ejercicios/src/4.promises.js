fetch = require('node-fetch');
//import fetch from 'node-fetch';

/**
 * Consumir la API https://jsonplaceholder.typicode.com/users y mostrar por consola los datos requeridos
 *
 * - Abrir el archivo archivo 4.api.js
 *
 * - Utilizar la función fetch para obtener los datos desde la URL.
 *
 * - Mostrar por consola el resultado de fetch
 *
 * - Convertir los resultados a un objeto utilizando resultado.json() **utilizando promise chaining**
 *
 * - Mostrar por consola el nombre del usuario y la ciudad donde vive
 */

// fetch('..... aquí va la url')
// recordar que fetch devuelve una promise, entonces puede hacer fetch(....).then(resultado => {.... })
fetch('https://jsonplaceholder.typicode.com/users')
  .then((value) => value.json())
  .then((users) =>
    users.map((user) => ({
      nombre: user.name,
      ciudad: user.address.city,
    }))
  )
  .then((lista) => console.log(lista));

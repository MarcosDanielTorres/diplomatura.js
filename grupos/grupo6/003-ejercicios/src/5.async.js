fetch = require('node-fetch');
/**
 * - Copiar el código de el ejercicio 4 en el cuerpo de una nueva función asincrónica `async function getRemoteData()`.
 *
 * - Modificar el cuerpo de la función para utilizar async/await en vez de Promise chaining.
 */

async function getRemoteData() {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const toJson = await data.json();

  const transform = await toJson.map((user) => ({
    nombre: user.name,
    ciudad: user.address.city,
  }));

  console.log(transform);
}

getRemoteData();

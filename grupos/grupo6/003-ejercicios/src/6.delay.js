/**
 * - Modificar nuestra función `delay` para que utilice Promises.
 * `delay` tomará un sólo parámetro `segundos` y debe devolver una Promise que resuelva cuando el tiempo ha finalizado.
 *
 * - Una vez modificada, cambiar nuestra función run() para que muestre en orden los siguientes mensajes.
 *
 * 1
 * Terminó 1
 * 2
 * Terminó 2
 * 3
 * Terminó 3
 *
 */

function delay(mensaje, segundos) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mensaje), segundos);
  });
}

let run = async () => {
  console.log(1);
  const res1 = delay('Terminó 1', 3000);
  console.log(res1);
  console.log(2);
  const res2 = delay('Terminó 2', 2000);
  console.log(res2);
  console.log(3);
  const res3 = delay('Terminó 3', 1000);
  console.log(res3);
};

run();

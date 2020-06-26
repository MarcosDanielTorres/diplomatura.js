import {Collection} from './1.collection'


const prueba = new Collection([1,2,3]);

prueba.add(10);

console.log(`Los elementos de lista son: ${prueba.elementos}`);

console.log(`La collection contiene al 3? ${prueba.has(3)}`);

console.log(`La collection contiene al 11? ${prueba.has(11)}`);

console.log('Se borra el numero 3 de la collection');

prueba.delete(3);

console.log(`La collection contiene al 3? ${prueba.has(3)}`);


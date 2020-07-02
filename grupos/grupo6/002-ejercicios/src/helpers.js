// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados
//const findUniversidadById = (id) => database.universidades.find(value => value.id === id);

import { database } from './basededatos';

// 3) Implementar una función que obtenga un profesor por Id
//const findProfesorById = (id) => database.profesores.find(profesor => profesor.id === id);

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla
//const findMateriaById = (id, materias) => database[materias].find(materia => materia.id === id);

// 5) Crear un objeto 'helpers' que contenga las funciones como métodos
// 6) Mover helpers y todo el código a un módulo, creando un nuevo archivo helpers.js
// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla
export const helpers = {
  findById: (tabla, id) => database[tabla].find((value) => value.id === id),
  findLastId: (tabla) => Math.max(...database[tabla].map((p) => p.id)),
};



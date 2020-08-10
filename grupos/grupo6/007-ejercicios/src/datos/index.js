const database = {
  profesores: [
    { id: 1, nombre: 'Jorge Esteban Quito' },
    { id: 2, nombre: 'Marta Raca' },
    { id: 3, nombre: 'Silvia Torre Negra' },
    { id: 4, nombre: 'Ramon Martinez' },
  ],
  materias: [
    {
      id: 1,
      nombre: 'Análisis matemático',
      profesores: [1, 2],
    },
    {
      id: 2,
      nombre: 'Corte y confección de sabanas',
      profesores: [3],
    },
    {
      id: 3,
      nombre: 'Diseño de indumentaria',
      profesores: [4],
    },
    {
      id: 4,
      nombre: 'Programación orientada a objetos',
      profesores: [1, 3],
    },
    {
      id: 5,
      nombre: 'Ciencias Sociales',
      profesores: [4],
    },
  ],
  alumnos: [
    { id: 1, nombre: 'Rigoberto Manchu', edad: 22 },
    { id: 2, nombre: 'Alina Robles', edad: 21 },
    { id: 3, nombre: 'Suzana Mendez', edad: 33 },
    { id: 4, nombre: 'Adrian Soto', edad: 26 },
    { id: 5, nombre: 'Martin Sarnaga', edad: 23 },
    { id: 6, nombre: 'Pablo Tomafi', edad: 30 },
  ],
  calificaciones: [
    { id: 1, alumno: 1, materia: 1, nota: 5 },
    { id: 2, alumno: 1, materia: 3, nota: 7.5 },
    { id: 3, alumno: 2, materia: 2, nota: 4 },
    { id: 4, alumno: 2, materia: 3, nota: 5 },
    { id: 5, alumno: 2, materia: 4, nota: 2 },
    { id: 6, alumno: 3, materia: 1, nota: 6 },
    { id: 7, alumno: 3, materia: 3, nota: 5 },
    { id: 8, alumno: 3, materia: 4, nota: 6 },
    { id: 9, alumno: 4, materia: 1, nota: 9 },
    { id: 10, alumno: 4, materia: 2, nota: 9.5 },
    { id: 11, alumno: 4, materia: 4, nota: 8.5 },
    { id: 12, alumno: 5, materia: 3, nota: 7 },
    { id: 13, alumno: 5, materia: 4, nota: 1 },
  ],
};
export default database;

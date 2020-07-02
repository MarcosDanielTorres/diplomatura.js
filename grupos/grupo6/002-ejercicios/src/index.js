// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './basededatos';

// 8) Importar helpers desde su propio módulo
import { helpers } from './helpers';

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper
const pushNewProvincia = (name) => {
  const newId = helpers.findLastId('provincias') + 1;
  database.provincias.push({ id: newId, nombre: name });

  return newId;
};

// 10) Implementar una función que reciba el id de una materia y devuelva la materia son los ids de universidad y profesores resueltos a sus nombres
const getIdMateria = (id) =>
  database.materias
    .map((materia) => ({
      id: materia.id,
      nombre: materia.nombre,
      profesores: materia.profesores.map(
        (o) => database.profesores.find((p) => p.id === o)?.nombre
      ),
      universidad: database.universidades.find(
        (u) => u.id === materia.universidad
      )?.nombre,
    }))
    .find((m) => m.id === id);

// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...
function mostrarNotasAlumnos() {
  console.log('NOTAS DE ALUMNOS');
  console.log('----------------');
  database.alumnos.forEach((alumno) => {
    console.log(alumno.nombre.toUpperCase());
    database.calificaciones
      .filter((calificacion) => (calificacion.alumno = alumno.id))
      .forEach((i) => {
        console.log(
          `${database.materias.find((m) => i.materia === m.id)?.nombre}: ${
            i.nota
          }`
        );
      });
  });
}

// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas
const guardarNota = (nombreAlumno, nombreMateria, nota) => {
  let idAlumno = database.alumnos.find((a) => nombreAlumno === a.nombre)?.id;

  if (!idAlumno) {
    idAlumno = helpers.findLastId('alumnos') + 1;
    database.alumnos.push({
      id: idAlumno,
      nombre: nombreAlumno,
      edad: null,
      provincia: null,
    });
  }

  let idMateria = database.materias.find(
    (materia) => materia.nombre === nombreMateria
  )?.id;

  if (!idMateria) {
    idMateria = helpers.findLastId('materias');
    database.materias.push({
      id: idMateria,
      nombre: nombreMateria,
      profesores: [2],
      universidad: 1,
    });
  }

  database.calificaciones.push({
    alumno: idAlumno,
    materia: idMateria,
    nota: nota,
  });
};

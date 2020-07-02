import basededatos from './basededatos';

/**
 * Obtiene la lista de materias aprobadas (nota >= 4) para el nombre de alumno dado.
 * En caso de no existir el alumno, devolver undefined.
 * En caso de que no encuentre ninguna materia para el alumno, devuelve un array vacio []
 * Ejemplo del formato del resultado suponiendo que el alumno cursa dos materias y tiene mas de 4.
 *  [
    {
      id: 1,
      nombre: 'Análisis matemático',
      profesores: [1, 2],
      universidad: 1,
    },
    {
      id: 2,
      nombre: 'Corte y confección de sabanas',
      profesores: [3],
      universidad: 2,
    }
  ]
 * @param {nombreAlumno} nombreAlumno
 */
export const materiasAprobadasByNombreAlumno = (nombreAlumno) => {
  // Ejemplo de como accedo a datos dentro de la base de datos
  //console.log("Resultado ", basededatos.alumnos);
  let alumnoId;
  let found = false;
  let i = 0;

  while (!found && i < basededatos.alumnos.length) {
    if (nombreAlumno === basededatos.alumnos[i].nombre) {
      alumnoId = basededatos.alumnos[i].id;
      found = true;
    }
    i++;
  }

  if (!found) {
    return undefined;
  }

  const materiasidAprobadasByAlumnoid = [];

  for (let i = 0; i < basededatos.calificaciones.length; i++) {
    if (
      basededatos.calificaciones[i].alumno === alumnoId &&
      basededatos.calificaciones[i].nota >= 4
    ) {
      materiasidAprobadasByAlumnoid.push(basededatos.calificaciones[i].materia);
    }
  }

  const materiasAprobadasByNombreAlumno = [];
  for (let i = 0; i < materiasidAprobadasByAlumnoid.length; i++) {
    let j = 0;
    let found = false;
    while (!found) {
      if (basededatos.materias[j].id == materiasidAprobadasByAlumnoid[i]) {
        materiasAprobadasByNombreAlumno.push(basededatos.materias[j]);
        found = true;
      }
      j++;
    }
  }

  return materiasAprobadasByNombreAlumno;
};

/**
 * Devuelve informacion ampliada sobre una universidad.
 * Si no existe la universidad con dicho nombre, devolvemos undefined.
 * Ademas de devolver el objeto universidad,
 * agregar la lista de materias dictadas por la universidad y
 * tambien agrega informacion de los profesores y alumnos que participan.
 * Ejemplo de formato del resultado (pueden no ser correctos los datos en el ejemplo):
 *{
      id: 1,
      nombre: 'Universidad del Comahue',
      direccion: {
        calle: 'Av. Siempre viva',
        numero: 2043,
        provincia: 'Neuquen',
      },
      materias: [
        {
          id: 1,
          nombre: 'Análisis matemático',
          profesores: [1, 2],
          universidad: 1,
        },
        {
          id: 4,
          nombre: 'Programación orientada a objetos',
          profesores: [1, 3],
          universidad: 1,
        },
      ],
      profesores:[
        { id: 1, nombre: 'Jorge Esteban Quito' },
        { id: 2, nombre: 'Marta Raca' },
        { id: 3, nombre: 'Silvia Torre Negra' },
      ],
      alumnos: [
         { id: 1, nombre: 'Rigoberto Manchu', edad: 22, provincia: 1 },
         { id: 2, nombre: 'Alina Robles', edad: 21, provincia: 2 },
      ]
    }
 * @param {string} nombreUniversidad
 */
export const expandirInfoUniversidadByNombre = (nombreUniversidad) => {
  let universidad;

  let i = 0;
  let found = false;

  while (!found && i < basededatos.universidades.length) {
    if (nombreUniversidad === basededatos.universidades[i].nombre) {
      universidad = basededatos.universidades[i];
      found = true;
    }
    i++;
  }

  let materias = [];
  for (let i = 0; i < basededatos.materias.length; i++) {
    if (universidad.id === basededatos.materias[i].universidad) {
      materias.push(basededatos.materias[i]);
    }
  }

  let profesores = [];
  for (let i = 0; i < basededatos.profesores.length; i++) {
    for (let j = 0; j < materias.length; j++) {
      for (let k = 0; k < materias[j].profesores.length; k++) {
        if (materias[j].profesores[k] === basededatos.profesores[i].id) {
          let l = 0;
          let found = false;
          while (!found && l < profesores.length) {
            if (profesores[l].id === basededatos.profesores[i].id) {
              found = true;
            }
            l++;
          }

          if (!found) {
            profesores.push(basededatos.profesores[i]);
          }
        }
      }
    }
  }

  let alumnos = [];
  for (let i = 0; i < basededatos.calificaciones.length; i++) {
    for (let j = 0; j < materias.length; j++) {
      if (materias[j].id === basededatos.calificaciones[i].materia) {
        for (let k = 0; k < basededatos.alumnos.length; k++) {
          if (
            basededatos.alumnos[k].id === basededatos.calificaciones[i].alumno
          ) {
            let l = 0;
            let found = false;
            while (!found && l < alumnos.length) {
              if (alumnos[l].id === basededatos.alumnos[k].id) {
                found = true;
              }
              l++;
            }

            if (!found) {
              alumnos.push(basededatos.alumnos[k]);
            }
          }
        }
      }
    }
  }

  const resultado = {};

  resultado.universidad = universidad;
  resultado.materias = materias;
  resultado.profesores = profesores;
  resultado.alumnos = alumnos;

  return resultado;
};

/**
 * Dado un nombre se busca el alumno en la base de datos y se devuelve.
 *
 * @param {string} name - Nombre del alumno a buscar.
 * @returns {string} alumno - El alumno buscado.
 */
const findAlumnoByName = (name) =>
  basededatos.alumnos.find((value) => value.nombre === name);

/**
 * Devuelve la lista de alumnos con promedio mayor al numero pasado
 * por parametro.
 * @param {number} promedio
 */
export const alumnosConPromedioMayorA = (promedio) => {
  const notasAlumnos = [];

  // Construimos lista de objetos alumno - notas - promedio
  for (let i = 0; i < basededatos.calificaciones.length; i++) {
    let j = 0;
    let found = false;

    while (!found && j < notasAlumnos.length) {
      if (basededatos.calificaciones[i].alumno === notasAlumnos[j].alumno) {
        found = true;
      } else {
        j++;
      }
    }

    if (!found) {
      const alumnoPromedio = {};

      alumnoPromedio.alumno = basededatos.calificaciones[i].alumno;
      alumnoPromedio.notas = [];
      alumnoPromedio.promedio = 0;

      // Ingreso primer nota encontrada
      alumnoPromedio.notas.push(basededatos.calificaciones[i].nota);

      notasAlumnos.push(alumnoPromedio);
    } else {
      notasAlumnos[j].notas.push(basededatos.calificaciones[i].nota);
    }
  }

  // Para cada alumno calculamos su promedio
  for (let i = 0; i < notasAlumnos.length; i++) {
    let suma = 0;

    for (let j = 0; j < notasAlumnos[i].notas.length; j++) {
      suma += notasAlumnos[i].notas[j];
    }

    notasAlumnos[i].promedio = suma / notasAlumnos[i].notas.length;
  }

  // Listado de alumnos con el promedio solicitado
  const resultado = [];

  // Filtramos alumnos que no tengan el promedio pedido
  const mayorPromedio = (obj) => obj.promedio > promedio;
  const nuevo = notasAlumnos.filter(mayorPromedio);

  // Buscamos en la BD los objetos alumno
  if (nuevo.length > 0) {
    for (let i = 0; i < nuevo.length; i++) {
      for (let j = 0; j < basededatos.alumnos.length; j++) {
        if (basededatos.alumnos[j].id === nuevo[i].alumno) {
          resultado.push(basededatos.alumnos[j]);
        }
      }
    }
  }

  return resultado;
};

/**
 * Devuelve el promedio de edad de los alumnos.
 * @returns {number} promedio de edades
 */
export const promedioDeEdad = () => {
  const cantidadAlumnos = basededatos.alumnos.length;
  let promedio = 0;
  for (let i = 0; i < cantidadAlumnos; i++) {
    promedio += basededatos['alumnos'][i].edad;
  }
  return promedio / cantidadAlumnos;
};

/**
 * Devuelve la lista de materias sin alumnos
 */
export const materiasSinAlumnosAnotados = () => {
  // si pido la longitud de materia se la cantidad que hay
  // entonces tengo que descartar las que sean iguales a las de calificaciones
  // uso doble for porque la materias puede ser == a calificacion en cualquier parte
  // pero es ineficiente para muchos valores de calificaciones
  let resultado = [];
  let numMateria = 1;
  let flag = [];
  for (let i = 0; i < basededatos.materias.length; i++) {
    let j = 0;
    while (j < basededatos.calificaciones.length) {
      if (basededatos.materias[i].id == basededatos.calificaciones[j].materia) {
        flag[i] = true;
        break;
      } else {
        j++;
        flag[i] = false;
      }
    }
  }
  for (let f = 0; f < flag.length; f++) {
    if (!flag[f]) {
      resultado.push(basededatos.materias[f]);
    }
  }
  return resultado;
};

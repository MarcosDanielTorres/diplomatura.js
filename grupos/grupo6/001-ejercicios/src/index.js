import {
  materiasAprobadasByNombreAlumno,
  expandirInfoUniversidadByNombre,
  promedioDeEdad,
  materiasSinAlumnosAnotados,
  alumnosConPromedioMayorA,
} from './moduloEjercicios';

// materiasAprobadasByNombreAlumno
console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios materiasAprobadasByNombreAlumno.');

const materiasAprobadasPorSuzana = materiasAprobadasByNombreAlumno(
  'Suzana Mendez'
);
console.log('Materias aprobadas por Suzana:', materiasAprobadasPorSuzana);

const materiasAprobadasPorAlina = materiasAprobadasByNombreAlumno(
  'Alina Robles'
);
console.log('Materias aprobadas por Alina:', materiasAprobadasPorAlina);

// expandirInfoUniversidadByNombre
console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios expandirInfoUniversidadByNombre.');

const infoUniversidadComahue = expandirInfoUniversidadByNombre(
  'Universidad del Comahue'
);
console.log('Info comahue:', infoUniversidadComahue);

const infoUniversidadRio = expandirInfoUniversidadByNombre(
  'Universidad de Rio Negro'
);
console.log('Info rio negro:', infoUniversidadRio);

// promedioDeEdad
console.log('------------------------------------------------------');
console.log('Ejecutando ejercicio promedioDeEdad.');
const promedioAlumnos = promedioDeEdad();
console.log('Promedio de edad de los alumnos: ', promedioAlumnos);

// alumnosConPromedioMayorA
console.log('------------------------------------------------------');
console.log('Ejecutando ejercicio alumnosConPromedioMayorA.');
const mayorACinco = alumnosConPromedioMayorA(5);
console.log('Alumnos con promedio mayor a 5: ', mayorACinco);

// materiasSinAlumnosAnotados
console.log('------------------------------------------------------');
console.log('Ejecutando ejercicio materiasSinAlumnosAnotados.');
const materias = materiasSinAlumnosAnotados();
console.log('Materias sin alumnos ', materias);

import express from 'express';
import bodyParser from 'body-parser';
import alumnosRoutes from './callControllers/alumnos';
import materiasRoutes from './controllers/materias';
import profesoresRoutes from './callControllers/profesores';
import calificacionesRoutes from './controllers/calificaciones';

const PORT = 8080;
const app = express();
app.use(bodyParser.json());

app.use('/alumnos', alumnosRoutes);
app.use('/materias', materiasRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/calificaciones', calificacionesRoutes);

app.get('/', function (req, res) {
  res.json({ mensaje: 'Bienvenido al servidor de la Universidad' });
});

app.listen(PORT);
console.log(`Express started on port ${PORT}`); 
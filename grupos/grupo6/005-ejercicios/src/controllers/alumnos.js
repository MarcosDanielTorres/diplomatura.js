import express from 'express';
const router = express.Router();
import alumnosController from './alumnosController';

router
  .route('/')
  .get(alumnosController.allAlumnos)
  .post(alumnosController.createAlumno);

router
  .route('/:id')
  .get(alumnosController.showById)
  .put(alumnosController.updateById)
  .delete(alumnosController.deleteById);

export default router;

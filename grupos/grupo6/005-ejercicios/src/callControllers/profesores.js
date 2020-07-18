import express from 'express';
const router = express.Router();
import profesoresController from '../controllers/profesoresController';

router
  .route('/')
  .get(profesoresController.allProfesores)
  .post(profesoresController.createProfesor);

router
  .route('/:id')
  .get(profesoresController.showById)
  .put(profesoresController.updateProfesor)
  .delete(profesoresController.deleteProfesor);

export default router;
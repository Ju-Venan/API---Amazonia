import express from 'express';
import { CuriosidadesController } from '../controller/curiosidades.controller.js';

const router = express.Router();

router.get('/curiosidades', CuriosidadesController.getAll);
router.get('/curiosidades/:id', CuriosidadesController.getById);
router.post('/curiosidades', CuriosidadesController.create);
router.put('/curiosidades/:id', CuriosidadesController.update);
router.delete('/curiosidades/:id', CuriosidadesController.delete);

export default router;

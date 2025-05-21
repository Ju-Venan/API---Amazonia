import express from 'express';
import CuriosidadesController from '../controller/curiosidades.controller.js';

const router = express.Router();

router.get('/curiosidades', CuriosidadesController.getCuriosidades);
router.get('/curiosidades/:id', CuriosidadesController.getById);
router.post('/curiosidades/criar', CuriosidadesController.create);
router.put('/curiosidades/atualizar/:id', CuriosidadesController.update);
router.delete('/curiosidades/deletar/:id', CuriosidadesController.delete);

export default router;

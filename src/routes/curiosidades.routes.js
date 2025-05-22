import express from 'express';
import CuriosidadesController from '../controller/curiosidades.controller.js';

const router = express.Router();

router.get('/', CuriosidadesController.getCuriosidades);
router.get('/:id', CuriosidadesController.getById);
router.post('/criar', CuriosidadesController.create);
router.put('/atualizar/:id', CuriosidadesController.update);
router.delete('/deletar/:id', CuriosidadesController.delete);

export default router;

import express from 'express';
import { AmazoniaController } from '../controller/amazonia.controller.js';

const router = express.Router();

router.get('/amazonia', AmazoniaController.getAll);
router.get('/amazonia/:id', AmazoniaController.getById);
router.post('/amazonia', AmazoniaController.create);
router.put('/amazonia/:id', AmazoniaController.update);
router.delete('/amazonia/:id', AmazoniaController.delete);

export default router;

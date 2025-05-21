import { Router } from "express";
const rota = Router();
import animalController from "../controller/animal.Controller.js";

rota.post('/criar', animalController.criarAnimal); // ROTA POST
rota.get('/', animalController.listarAnimais); // ROTA GET
rota.put('/atualizar/:id', animalController.atualizarAnimal); // ROTA PUT
rota.delete('/deletar/:id', animalController.excluirAnimal); // ROTA DELETE

export default rota;
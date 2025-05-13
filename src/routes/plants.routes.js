import { Router } from "express";
import PlantsController from "../controller/plants.controller.js";

const plantsRouter = Router();

// http://localhost:3000/plantas
plantsRouter.get("/", PlantsController.read)

// http://localhost:3000/plantas/cadastrar
plantsRouter.post("/cadastrar", PlantsController.create)

// http://localhost:3000/plantas/atualizar/id_que_deseja_deletar
plantsRouter.patch("/atualizar/:id", PlantsController.update)

// http://localhost:3000/plantas/deletar/id_que_deseja_deletar
plantsRouter.delete("/deletar/:id", PlantsController.delete)

export default plantsRouter;


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

/**
 * @openapi
 * tags:
 *   name: Plantas
 *   description: Rotas para gerenciamento de plantas
 */

/**
 * @openapi
 * /plantas:
 *   get:
 *     summary: Lista todas as plantas
 *     tags: [Plantas]
 *     responses:
 *       200:
 *         description: Lista de plantas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Planta'
 */

/**
 * @openapi
 * /plantas/cadastrar:
 *   post:
 *     summary: Cadastra uma nova planta
 *     tags: [Plantas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PlantaInput'
 *     responses:
 *       201:
 *         description: Planta criada com sucesso
 */

/**
 * @openapi
 * /plantas/atualizar/{id}:
 *   patch:
 *     summary: Atualiza uma planta pelo ID
 *     tags: [Plantas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da planta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PlantaInput'
 *     responses:
 *       200:
 *         description: Planta atualizada com sucesso
 *       404:
 *         description: Planta não encontrada
 */

/**
 * @openapi
 * /plantas/deletar/{id}:
 *   delete:
 *     summary: Remove uma planta pelo ID
 *     tags: [Plantas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da planta a ser deletada
 *     responses:
 *       200:
 *         description: Planta deletada com sucesso
 *       404:
 *         description: Planta não encontrada
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     Planta:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "abc123"
 *         name:
 *           type: string
 *           example: "Jatobá"
 *         specie:
 *           type: string
 *           example: "Hymenaea courbaril"
 *         botanicalDescription:
 *           type: string
 *           example: "Árvore alta com folhas compostas e flores amarelas."
 *         naturalHabitat:
 *           type: string
 *           example: "Amazônia Central"
 *         benefits:
 *           type: string
 *           example: "Usada na medicina tradicional e na construção civil"

 *     PlantaInput:
 *       type: object
 *       required:
 *         - name
 *         - specie
 *         - botanicalDescription
 *         - naturalHabitat
 *         - benefits
 *       properties:
 *         name:
 *           type: string
 *           example: "Jatobá"
 *         specie:
 *           type: string
 *           example: "Hymenaea courbaril"
 *         botanicalDescription:
 *           type: string
 *           example: "Árvore alta com folhas compostas e flores amarelas."
 *         naturalHabitat:
 *           type: string
 *           example: "Amazônia Central"
 *         benefits:
 *           type: string
 *           example: "Usada na medicina tradicional e na construção civil"
 */

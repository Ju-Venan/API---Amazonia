import { Router } from "express";
const animalRouter = Router();
import animalController from "../controller/animal.Controller.js";

animalRouter.post('/criar', animalController.criarAnimal); // ROTA POST
animalRouter.get('/', animalController.listarAnimais); // ROTA GET
animalRouter.put('/atualizar/:id', animalController.atualizarAnimal); // ROTA PUT
animalRouter.delete('/deletar/:id', animalController.excluirAnimal); // ROTA DELETE

export default animalRouter;

/**
 * @openapi
 * tags:
 *   name: Animais
 *   description: Rotas para gerenciamento de animais
 */

/**
 * @openapi
 * /animal:
 *   get:
 *     summary: Lista todos os animais
 *     tags: [Animais]
 *     responses:
 *       200:
 *         description: Lista de animais
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Animal'
 */

/**
 * @openapi
 * /animal/criar:
 *   post:
 *     summary: Cadastra um novo animal
 *     tags: [Animais]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnimalInput'
 *     responses:
 *       201:
 *         description: Animal criado com sucesso
 */

/**
 * @openapi
 * /animal/atualizar/{id}:
 *   put:
 *     summary: Atualiza um animal pelo ID
 *     tags: [Animais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do animal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnimalInput'
 *     responses:
 *       200:
 *         description: Animal atualizado com sucesso
 *       404:
 *         description: Animal não encontrado
 */

/**
 * @openapi
 * /animal/deletar/{id}:
 *   delete:
 *     summary: Remove um animal pelo ID
 *     tags: [Animais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do animal a ser deletado
 *     responses:
 *       200:
 *         description: Animal deletado com sucesso
 *       404:
 *         description: Animal não encontrado
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Animal:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "d290f1ee-6c54-4b01-90e6-d701748f0851"
 *         nome:
 *           type: string
 *           example: "Onça-pintada"
 *         nomeCientifico:
 *           type: string
 *           example: "Panthera onca"
 *         genero:
 *           type: string
 *           example: "Panthera"
 *         familia:
 *           type: string
 *           example: "Felidae"
 *         descricao:
 *           type: string
 *           example: "Mamífero carnívoro de grande porte encontrado nas Américas."
 *         popEstimada:
 *           type: integer
 *           example: 15000
 *         bioma:
 *           type: string
 *           example: "Amazônia"
 *         nivelAmeaca:
 *           type: string
 *           example: "Vulnerável"

 *     AnimalInput:
 *       type: object
 *       required:
 *         - nome
 *         - nomeCientifico
 *         - genero
 *         - familia
 *         - descricao
 *         - popEstimada
 *         - bioma
 *         - nivelAmeaca
 *       properties:
 *         nome:
 *           type: string
 *           example: "Onça-pintada"
 *         nomeCientifico:
 *           type: string
 *           example: "Panthera onca"
 *         genero:
 *           type: string
 *           example: "Panthera"
 *         familia:
 *           type: string
 *           example: "Felidae"
 *         descricao:
 *           type: string
 *           example: "Mamífero carnívoro de grande porte encontrado nas Américas."
 *         popEstimada:
 *           type: integer
 *           example: 15000
 *         bioma:
 *           type: string
 *           example: "Amazônia"
 *         nivelAmeaca:
 *           type: string
 *           example: "Vulnerável"
 */

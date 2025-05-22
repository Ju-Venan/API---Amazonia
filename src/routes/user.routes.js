import express from 'express';
import UserController from "../controller/user.controller.js"

const userRouter = express.Router();

userRouter.get("/", UserController.getAllUsers);

userRouter.post("/cadastrar", UserController.createUser);

userRouter.put("/atualizar/:id", UserController.updateUser);

userRouter.delete("/deletar/:id", UserController.deleteUser);

export default userRouter;

/**
 * @openapi
 * tags:
 *   name: Usuários
 *   description: Rotas para gerenciamento de usuários
 */

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */

/**
 * @openapi
 * /users/cadastrar:
 *   post:
 *     summary: Cadastra um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UsuarioInput'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */

/**
 * @openapi
 * /users/atualizar/{id}:
 *   put:
 *     summary: Atualiza um usuário pelo ID
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UsuarioInput'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */

/**
 * @openapi
 * /users/deletar/{id}:
 *   delete:
 *     summary: Remove um usuário pelo ID
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário a ser deletado
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "d290f1ee-6c54-4b01-90e6-d701748f0851"
 *         name:
 *           type: string
 *           example: "Maria Silva"
 *         email:
 *           type: string
 *           format: email
 *           example: "maria@email.com"
 *         password:
 *           type: string
 *           example: "senha123"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-05-21T10:00:00Z"

 *     UsuarioInput:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           example: "Maria Silva"
 *         email:
 *           type: string
 *           format: email
 *           example: "maria@email.com"
 *         password:
 *           type: string
 *           example: "senha123"
 */

/**
 * @swagger
 * tags:
 *   name: Animal
 *   description: Rotas para gerenciamento dos animais da API da Amazônia
 */

/**
 * @swagger
 * /animal:
 *   get:
 *     tags: [Animal]
 *     summary: Lista todos os animais
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               nomeCientifico:
 *                 type: string
 *               genero:
 *                 type: string
 *               familia:
 *                 type: string
 *               descricao:
 *                 type: string
 *               popEstimada:
 *                 type: integer
 *               bioma:
 *                 type: string
 *               nivelAmeaca:
 *                 type: string
 * 
 *     responses:
 *       200:
 *         description: Lista de animais retornada com sucesso
 * /animal/criar:
 *   post:
 *     tags: [Animal]
 *     summary: Cria um novo animal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               nomeCientifico:
 *                 type: string
 *               genero:
 *                 type: string
 *               familia:
 *                 type: string
 *               descricao:
 *                 type: string
 *               popEstimada:
 *                 type: integer
 *               bioma:
 *                 type: string
 *               nivelAmeaca:
 *                 type: string
 *     responses:
 *       201:
 *         description: Animal criado com sucesso
 */

/**
 * @swagger
 * /animal/atualizar/{id}:
 *   put:
 *     tags: [Animal]
 *     summary: Atualiza um animal pelo id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id do animal para atualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               nomeCientifico:
 *                 type: string
 *               genero:
 *                 type: string
 *               familia:
 *                 type: string
 *               descricao:
 *                 type: string
 *               popEstimada:
 *                 type: integer
 *               bioma:
 *                 type: string
 *               nivelAmeaca:
 *                 type: string
 *     responses:
 *       200:
 *         description: Animal atualizado com sucesso
 */

/**
 * @swagger
 * /animal/deletar/{id}:
 *   delete:
 *     tags: [Animal]
 *     summary: Deleta um animal pelo id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id do animal para deletar
 *     responses:
 *       200:
 *         description: Animal deletado com sucesso
 */


# Rotas da API

A seguir estão listadas todas as rotas da API AmaZone, organizadas por entidade, com descrições detalhadas para facilitar o uso correto da API.

Cada rota apresenta:

* O método HTTP utilizado
* A URL da rota
* A finalidade da rota
* O formato esperado de entrada (body/parâmetros)
* As possíveis respostas da API

---

## 🐾 Animais (`/animal`)

### 🔹 `POST /animal/criar`

* **Descrição**: Cadastra um novo animal na base de dados.
* **Body esperado**:

```json
{
  "nome": "Onça-pintada",
  "especie": "Panthera onca",
  "descricao": "Maior felino das Américas."
}
```

* **Respostas**:

  * `201 Created`: Animal cadastrado com sucesso.
  * `400 Bad Request`: Dados obrigatórios ausentes ou inválidos.

### 🔹 `GET /animal`

* **Descrição**: Lista todos os animais cadastrados.
* **Respostas**:

  * `200 OK`: Lista de animais.
  * `500 Internal Server Error`: Erro ao buscar dados.

### 🔹 `PUT /animal/atualizar/:id`

* **Descrição**: Atualiza os dados de um animal existente.
* **Parâmetro**: `id` do animal (na URL).
* **Body esperado**: Mesmo formato do cadastro.
* **Respostas**:

  * `200 OK`: Animal atualizado.
  * `404 Not Found`: Animal não encontrado.

### 🔹 `DELETE /animal/deletar/:id`

* **Descrição**: Remove um animal pelo ID.
* **Parâmetro**: `id` do animal.
* **Respostas**:

  * `200 OK`: Animal removido com sucesso.
  * `404 Not Found`: Animal não encontrado.

---

## 🌱 Plantas (`/plantas`)

### 🔹 `GET /plantas`

* **Descrição**: Retorna todas as plantas cadastradas.
* **Respostas**:

  * `200 OK`: Lista de plantas.

### 🔹 `POST /plantas/cadastrar`

* **Descrição**: Cadastra uma nova planta.
* **Body esperado**:

```json
{
  "nome": "Vitória-régia",
  "descricao": "Planta aquática típica da Amazônia."
}
```

### 🔹 `PATCH /plantas/atualizar/:id`

* **Descrição**: Atualiza parcialmente os dados de uma planta.
* **Parâmetro**: `id` da planta.

### 🔹 `DELETE /plantas/deletar/:id`

* **Descrição**: Remove uma planta pelo ID.

---

## 🔥 Ameaças (`/threat`)

### 🔹 `GET /threat`

* **Descrição**: Lista todas as ameaças ambientais.

### 🔹 `GET /threat/:id`

* **Descrição**: Busca uma ameaça específica.
* **Parâmetro**: `id` da ameaça.

### 🔹 `POST /threat`

* **Descrição**: Cadastra uma nova ameaça.
* **Body esperado**:

```json
{
  "tipo": "Desmatamento",
  "impacto": "Redução da biodiversidade."
}
```

### 🔹 `PUT /threat/:id`

* **Descrição**: Atualiza os dados de uma ameaça existente.

### 🔹 `DELETE /threat/:id`

* **Descrição**: Remove uma ameaça pelo ID.

---

## 🧠 Curiosidades (`/curiosidades`)

### 🔹 `GET /curiosidades`

* **Descrição**: Lista todas as curiosidades sobre a Amazônia.

### 🔹 `GET /curiosidades/:id`

* **Descrição**: Retorna uma curiosidade específica.

### 🔹 `POST /curiosidades/criar`

* **Descrição**: Cadastra uma nova curiosidade.

### 🔹 `PUT /curiosidades/atualizar/:id`

* **Descrição**: Atualiza os dados de uma curiosidade.

### 🔹 `DELETE /curiosidades/deletar/:id`

* **Descrição**: Remove uma curiosidade pelo ID.

---

## 👤 Usuários (`/users`)

### 🔹 `GET /users`

* **Descrição**: Lista todos os usuários cadastrados.

### 🔹 `POST /users/cadastrar`

* **Descrição**: Cadastra um novo usuário.
* **Body esperado**:

```json
{
  "name": "Maria Silva",
  "email": "maria@email.com",
  "password": "senha123"
}
```

### 🔹 `PUT /users/atualizar/:id`

* **Descrição**: Atualiza os dados de um usuário pelo ID.

### 🔹 `DELETE /users/deletar/:id`

* **Descrição**: Remove um usuário pelo ID.

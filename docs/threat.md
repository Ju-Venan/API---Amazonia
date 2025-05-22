# 📦 Módulo Threat

Este módulo gerencia as **ameaças** (Threat) dentro da API Amazônia. Ele oferece operações CRUD completas para cadastrar, visualizar, atualizar e excluir ameaças.

---

## 🚦 Endpoints

### ➡️ GET `/api/threat`

Retorna a lista de todas as ameaças cadastradas.

**Resposta:**

```json
[
  {
    "id": 1,
    "name": "Desmatamento",
    "description": "Remoção da vegetação nativa"
  },
  {
    "id": 2,
    "name": "Queimadas",
    "description": "Incêndios florestais ilegais"
  }
]



###➡️ GET /api/threat/:id
Retorna uma ameaça específica pelo seu ID.

**Resposta (200)**:
json
{
  "id": 1,
  "name": "Desmatamento",
  "description": "Remoção da vegetação nativa"
}

**Resposta (404)**:
json
{
  "message": "Ameaça não encontrada"
}



###➡️ POST /api/threat
Cria uma nova ameaça.

**Body**:
json
{
  "name": "Caça ilegal",
  "description": "Atividade predatória de animais silvestres"
}


**Resposta**:
json
{
  "message": "Ameaça cadastrada com sucesso!",
  "newThreat": {
    "id": 3,
    "name": "Caça ilegal",
    "description": "Atividade predatória de animais silvestres"
  }
}



###➡️ PUT /api/threat/:id
Atualiza uma ameaça existente.

**Body**:
json
{
  "name": "Desmatamento ilegal",
  "description": "Remoção da floresta sem autorização"
}

**Resposta**:
json
{
  "message": "Ameaça atualizada com sucesso!",
  "updated": {
    "id": 1,
    "name": "Desmatamento ilegal",
    "description": "Remoção da floresta sem autorização"
  }
}



###➡️ DELETE /api/threat/:id
Remove uma ameaça do sistema.

**Resposta**:
json
{
  "message": "Ameaça removida com sucesso!"
}


🛠️ Implementação
Controller: src/controller/threat.controller.js
--getThreat → Lista todas as ameaças.

--getThreatById → Busca uma ameaça específica.

--createThreat → Cadastra uma nova ameaça.

--updateThreat → Atualiza uma ameaça.

--deleteThreat → Remove uma ameaça.

# 🌳 AmaZone API

> Uma API REST para centralização e gerenciamento de informações sobre a biodiversidade da Floresta Amazônica.

## 📌 Sobre o Projeto

A Amazônia possui uma das maiores biodiversidades do planeta, abrigando milhares de espécies de animais e plantas fundamentais para o equilíbrio ambiental global.

O **AmaZone API** foi desenvolvido com o objetivo de disponibilizar uma plataforma organizada para consulta e gerenciamento de informações sobre a fauna, flora, curiosidades e ameaças ambientais relacionadas à região amazônica.

A aplicação permite o cadastro, consulta, atualização e remoção de dados, oferecendo uma estrutura escalável para futuras integrações com aplicações web e mobile.

---

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando uma arquitetura baseada em API REST com as seguintes tecnologias:

### Backend

* **Node.js** — Ambiente de execução JavaScript no servidor
* **Express.js** — Framework para criação das rotas HTTP
* **Prisma ORM** — Gerenciamento e comunicação com banco de dados
* **PostgreSQL** — Banco de dados relacional

### Qualidade e Documentação

* **Jest** — Framework de testes automatizados
* **Supertest** — Testes de integração de endpoints
* **Swagger UI** — Documentação interativa da API
* **MkDocs** — Documentação técnica estruturada

---

## 🏗️ Arquitetura do Projeto

O projeto segue uma organização baseada na separação de responsabilidades:

```
src/
├── controllers/   # Controle das requisições HTTP
├── routes/        # Definição dos endpoints
├── services/      # Regras de negócio
├── prisma/        # Configuração do ORM e banco de dados
├── middlewares/   # Interceptadores e validações
└── tests/         # Testes automatizados
```

---

## 🗃️ Modelagem do Banco de Dados

A aplicação utiliza PostgreSQL com Prisma ORM.

Principais entidades:

### 🐾 Animal

Armazena informações sobre espécies da fauna amazônica.

Exemplos de dados:

* Nome popular
* Espécie
* Gênero
* Família
* População estimada
* Bioma
* Nível de ameaça

### 🌱 Plant

Gerencia informações relacionadas à flora amazônica.

Dados armazenados:

* Nome
* Espécie
* Descrição botânica
* Habitat
* Benefícios

### 🔥 Threat

Representa ameaças ambientais que afetam a floresta.

Dados:

* Nome da ameaça
* Descrição do impacto ambiental

### 🧠 Curiosity

Banco de curiosidades e informações educativas sobre a Amazônia.

### 👤 User

Gerenciamento básico de usuários cadastrados.

---

# ⚙️ Como Executar o Projeto

## Pré-requisitos

Antes de iniciar, certifique-se de possuir:

* Node.js instalado
* npm ou yarn
* PostgreSQL configurado

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/ju-venan/api---amazonia.git
```

Acesse a pasta:

```bash
cd api---amazonia
```

Instale as dependências:

```bash
npm install
```

---

## Configuração das Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
BACKEND_PORT=3000

DATABASE_URL="postgresql://usuario:senha@localhost:5432/amazone_db?schema=public"
```

---

## Configuração do Banco de Dados

Execute as migrações:

```bash
npm run prisma:migrate
```

Gere o cliente Prisma:

```bash
npm run prisma:generate
```

---

## Inicialização

Execute o servidor em modo desenvolvimento:

```bash
npm run dev
```

A API estará disponível em:

```
http://localhost:3000
```

---

# 📚 Endpoints Disponíveis

## 🐾 Animals

| Método | Endpoint                | Descrição              |
| ------ | ----------------------- | ---------------------- |
| GET    | `/animal`               | Lista todos os animais |
| POST   | `/animal/criar`         | Cadastra um animal     |
| PUT    | `/animal/atualizar/:id` | Atualiza um animal     |
| DELETE | `/animal/deletar/:id`   | Remove um animal       |

---

## 🌱 Plants

| Método | Endpoint                 | Descrição              |
| ------ | ------------------------ | ---------------------- |
| GET    | `/plantas`               | Lista todas as plantas |
| POST   | `/plantas/cadastrar`     | Cadastra uma planta    |
| PATCH  | `/plantas/atualizar/:id` | Atualização parcial    |
| DELETE | `/plantas/deletar/:id`   | Remove uma planta      |

---

## 🔥 Threats

| Método | Endpoint      | Descrição                |
| ------ | ------------- | ------------------------ |
| GET    | `/threat`     | Lista ameaças ambientais |
| GET    | `/threat/:id` | Busca ameaça por ID      |
| POST   | `/threat`     | Cria uma ameaça          |
| PUT    | `/threat/:id` | Atualiza uma ameaça      |
| DELETE | `/threat/:id` | Remove uma ameaça        |

---

## 🧪 Testes Automatizados

O projeto possui testes unitários e testes de integração utilizando Jest e Supertest.

Executar testes:

```bash
npm run test
```

---

# 📖 Documentação

A documentação completa da API está disponível através de: 

* Swagger UI para testes e visualização dos endpoints
* MkDocs para documentação técnica detalhada: https://ju-venan.github.io/API---Amazonia/

---

# 🎯 Objetivos Futuros

Possíveis melhorias:

* Controle de permissões de usuários
* Deploy em ambiente cloud
* Integração com aplicações mobile
* Dashboard de visualização de dados ambientais


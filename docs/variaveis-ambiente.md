# Variáveis de Ambiente

Este projeto utiliza variáveis de ambiente para configurar aspectos fundamentais como a porta do servidor e o caminho para o banco de dados. Essas variáveis devem ser definidas em um arquivo `.env` na raiz do projeto.

## Lista de variáveis

| Variável       | Descrição                                     | Exemplo                        |
|----------------|-----------------------------------------------|--------------------------------|
| `BACKEND_PORT` | Define a porta em que o servidor irá rodar.   | `3000`                         |
| `DB_PATH`      | Caminho do arquivo SQLite usado no projeto.   | `./src/database/database.db`   |

> 💡 Crie um arquivo `.env` com base no arquivo `.env.example` fornecido neste repositório.
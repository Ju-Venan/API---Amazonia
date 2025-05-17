import app from "./main.js";
import dotenv from "dotenv"

// lendo o arquivo .env
dotenv.config();

// informando que a porta será a passada no arquivo .env ou 3000
const PORT = process.env.BACKEND_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


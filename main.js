import express from 'express';
import router from "./src/routes/amazonia.routes.js";
import plantsRouter from './src/routes/plants.routes.js';
import dotenv from "dotenv"

// lendo o arquivo .env
dotenv.config();

// iniciando a biblioteca express
const app = express();

// informando que a porta será a passada no arquivo .env ou 3000
const PORT = process.env.BACKEND_PORT || 3000;

app.use(express.json());

//Rotas
app.use(router); 
app.use("/plantas", plantsRouter );

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

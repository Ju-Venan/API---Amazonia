import express from 'express';
import animais from "./src/routes/animal.Route.js";
import corsMiddleware from './src/middlewares/cors.js';
const app = express();

// Aplicar middlewares
app.use(corsMiddleware); // Aplicar o middleware do CORS antes de outros middlewares

app.use(animais);

app.use(express.json()); // PARA O POST

// Usar as rotas
app.use('/animal', animais);

export default app; //exporta o app para usar o express


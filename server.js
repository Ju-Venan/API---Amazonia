import express from 'express';
import cors from "cors";
import animais from "./src/routes/animal.Route.js";
import threatRouter from "./src/routes/threat.routes.js";
import corsMiddleware from './src/middlewares/cors.js';
import { logger } from "./src/middlewares/logger.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

// Aplicar middlewares
app.use(corsMiddleware); // Aplicar o middleware do CORS antes de outros middlewares
app.use(logger);

// app.use(animais);

// app.use(express.json()); // PARA O POST

// Usar as rotas
app.use('/animal', animais);
app.use("/threat", threatRouter);

export default app; //exporta o app para usar o express


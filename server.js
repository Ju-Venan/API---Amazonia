import express from 'express';
import userRouter from "./src/routes/user.routes.js"
import animalRouter from "./src/routes/animal.Route.js";
import plantsRouter from "./src/routes/plants.routes.js"
import threatRouter from "./src/routes/threat.routes.js";
import corsMiddleware from './src/middlewares/cors.js';
import curiosidadesRouter from './src/routes/curiosidades.routes.js';
import { swaggerSpec, swaggerUiServe, swaggerUiSetup } from "./src/swagger.js";

const app = express();
app.use(express.json());

// Aplicar middlewares
app.use(corsMiddleware); // Aplicar o middleware do CORS antes de outros middlewares

// Rotas 
app.use("/users", userRouter);
app.use('/animal', animalRouter);
app.use("/plantas", plantsRouter);
app.use("/threat", threatRouter);
app.use("/curiosidades", curiosidadesRouter);
app.use("/api-docs", swaggerUiServe, swaggerUiSetup(swaggerSpec));

export default app; //exporta o app para usar o express


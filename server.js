import express from 'express';
import userRouter from "./src/routes/amazonia.routes.js"
import animais from "./src/routes/animal.Route.js";
import plantsRouter from "./src/routes/plants.routes.js"
import threatRouter from "./src/routes/threat.routes.js";
import corsMiddleware from './src/middlewares/cors.js';
import curiosidadesRouter from './src/routes/curiosidades.routes.js';
const app = express();

app.use(express.json());

// Aplicar middlewares
app.use(corsMiddleware); // Aplicar o middleware do CORS antes de outros middlewares
app.use(animais);
// Usar as rotas
app.use("/users", userRouter);
app.use('/animal', animais);
app.use("/plantas", plantsRouter);
app.use("/threat", threatRouter);
app.use("/curiosidades", curiosidadesRouter);
export default app; //exporta o app para usar o express


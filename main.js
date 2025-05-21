import express from 'express';
import { swaggerSpec, swaggerUi } from './swagger.js';
// import router from "./src/routes/amazonia.routes.js";
import plantsRouter from './src/routes/plants.routes.js';
import corsMiddleware from './src/middlewares/cors.middleware.js'

// iniciando a biblioteca express
const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

//Rotas
// app.use(router); 
app.use("/plantas", plantsRouter );

export default app;

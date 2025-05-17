import express from 'express';
// import router from "./src/routes/amazonia.routes.js";
import plantsRouter from './src/routes/plants.routes.js';

// iniciando a biblioteca express
const app = express();

app.use(express.json());

//Rotas
// app.use(router); 
app.use("/plantas", plantsRouter );

export default app;

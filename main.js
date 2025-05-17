import express from 'express';
// import router from "./src/routes/amazonia.routes.js";
import threatRouter from "./src/routes/threat.routes.js";
import { logEvents, logger } from "./src/middleware/logger.middleware.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(logger);
app.use(express.json());

// app.use(router); 
app.use("/threat", threatRouter);

app.listen(PORT, () => {
    logEvents(`Servidor rodando na porta ${PORT}`, "listen.log");
});

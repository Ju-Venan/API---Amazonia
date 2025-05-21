import dotenv from "dotenv";
dotenv.config();

import app from './server.js';
import { logger, logEvents } from "./src/middlewares/logger.middleware.js";

const PORT = 3000; // CONFIGURA A PORTA

app.listen(PORT, () => { // RODA A PORTA 3000 NO SERVIDOR
    logEvents(`Servidor rodando em http://localhost:${PORT}`, 'log_servidor.log');
});

export default app;
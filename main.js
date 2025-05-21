import express from 'express';
import curiosidadesRoutes from './src/routes/curiosidades.routes.js';
import amazoniaRoutes from './src/routes/amazonia.routes.js';
import dotenv from "dotenv";
dotenv.config();

import app from './server.js';

app.use(express.json());
app.use('/api', curiosidadesRoutes);
app.use('/api', amazoniaRoutes);


app.listen(PORT, () => { // RODA A PORTA 3000 NO SERVIDOR
    console.log(`Servidor rodando em http://localhost:${PORT}`,);
});

export default app;
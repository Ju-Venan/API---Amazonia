import express from 'express';
import animais from "./src/routes/animal.Route.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(animais); 

// Usar as rotas
app.use('/animal', animais);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

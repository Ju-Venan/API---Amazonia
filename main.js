import express from 'express';
import router from "./src/routes/amazonia.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router); 

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

import express from 'express';
import router from "./src/routes/amazonia.routes.js";
import threat from "./src/routes/threat.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router); 

app.use("/threat", threat);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

import express from 'express';
import curiosidadesRoutes from './src/routes/curiosidades.routes.js';
import amazoniaRoutes from './src/routes/amazonia.routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', curiosidadesRoutes);
app.use('/api', amazoniaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

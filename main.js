import app from './server.js';
const PORT = 3000; // CONFIGURA A PORTA



app.listen(PORT, () => { // RODA A PORTA 3000 NO SERVIDOR
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

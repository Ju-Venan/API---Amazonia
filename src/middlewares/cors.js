import cors from 'cors';

// Configuração do CORS
const corsOptions = {
    origin: '*', // Permite qualquer origem - em produção, especifique as origens permitidas
    methods: 'GET,,PUT,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
};

// Middleware do CORS
const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
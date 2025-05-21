import cors from 'cors';

// Configuração do CORS, NÃO MUDA EM NADA POR ENQUANTO | QUANDO FOR FEITO O FRONT-END SERÁ DE EXTREMA IMPORTÂNCIA
const corsOptions = {
    origin: '*', // Permite qualquer origem - em produção
    methods: 'GET,,PUT,POST,DELETE', //ESPECIFICA OS MÉTODOS PERMITIDOS
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
};

// Middleware do CORS
const corsMiddleware = cors(corsOptions);

export default corsMiddleware;


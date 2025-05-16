// swagger/swaggerConfig.js
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API da Amazônia',
      version: '1.0.0',
      description: 'Documentação da API de animais da Amazônia',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./docs/animal.Swagger.js'], // lê as rotas e os comentários Swagger
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

function swaggerDocs(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default swaggerDocs;

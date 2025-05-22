import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from 'swagger-jsdoc';

// configurando arquivo swagger
const swaggerOptions = {
    definition: {
    openapi: '3.0.0',
    info: {
      title: 'AmaZone API',
      version: '1.0.0',
      description: 'Uma API informativa sobre a fauna e a flora do pulmão do mundo: a floresta amazônica',
      contact: {
        name: 'Squad 2',
        url: 'https://github.com/Ju-Venan/API---Amazonia',
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local de desenvolvimento',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};


export const swaggerSpec = swaggerJSDoc(swaggerOptions);
export const swaggerUiServe = swaggerUi.serve;
export const swaggerUiSetup = swaggerUi.setup;
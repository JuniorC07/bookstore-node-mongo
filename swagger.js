import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Book Store API',
    description: 'A simple api developed in node, using mongoDB to maintain data'
  },
  host: 'localhost:3000'
};

const outputFile = './src/docs/swagger-output.json';
const routes = ['./src/routes/index.js'];

swaggerAutogen()(outputFile, routes, doc);
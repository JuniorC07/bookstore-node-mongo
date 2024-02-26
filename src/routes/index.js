import { Router } from "express";
import { serve, setup } from "swagger-ui-express";
import booksRouter from "./books.js";
import authorsRouter from "./authors.js";
import docFile from '../docs/swagger-output.json' assert { type: "json" };

const routes = Router()

routes.use("/authors", authorsRouter)
routes.use("/books", booksRouter)
routes.use('/docs', serve);
routes.get('/docs', setup(docFile, {jsonEditor: true,
}));
routes.get('/', (req, res) => {
  res.sendStatus(200);
});
routes.get("/healthz", (req, res) => {
  res.sendStatus(200);
});

export default routes
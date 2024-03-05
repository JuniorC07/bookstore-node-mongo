import { Router } from 'express'
import { serve, setup } from 'swagger-ui-express'
import booksRouter from './books.js'
import authorsRouter from './authors.js'
import { readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const docFile = readFileSync(path.resolve(path.dirname(__filename), '../docs/swagger-output.json'))
const routes = Router()

routes.use('/authors', authorsRouter)
routes.use('/books', booksRouter)
routes.use('/docs', serve)
routes.get('/docs', setup(JSON.parse(docFile), {jsonEditor: true}))
routes.get('/', (req, res) => {
  res.sendStatus(200)
})
routes.get('/healthz', (req, res) => {
  res.sendStatus(200)
})

export default routes
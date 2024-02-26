import { Router } from "express"
import authorController from "../controllers/authors.js"
import handleMethod from "../utils/handleMethod.js"

const booksRouter = Router()

booksRouter.get("/", handleMethod(authorController.findAll))
booksRouter.get("/:id", handleMethod(authorController.findOne))
booksRouter.post("/", handleMethod(authorController.create))
booksRouter.put("/:id", handleMethod(authorController.update))
booksRouter.delete("/:id", handleMethod(authorController.remove))

export default booksRouter
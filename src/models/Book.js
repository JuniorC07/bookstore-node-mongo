import mongoose from 'mongoose'
import { authorSchema } from './Author.js'

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true },
  publishingCompany: { type: String },
  price: { type: Number, required: true },
  pages: { type: Number },
  author: authorSchema
}, { versionKey: false })

const book = mongoose.model('book', bookSchema)

export default book
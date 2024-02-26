import mongoose from "mongoose"

export const authorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true }
}, { versionKey: false })

const author = mongoose.model("author", authorSchema)

export default author
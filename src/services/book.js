import bookModel from '../models/Book.js'
import authorModel from '../models/Author.js'
import { InvalidFieldError } from '../errors/index.js'

const findAll = ({title, price, skip, limit, sort = ''}) => {
  const order = {}
  const validSortFields = ['title', 'publishingCompany', 'price']
  const validSort = validSortFields.find(vs => vs === sort || `-${sort}`)
  if(validSort){
    const direction = sort.includes('-') ? -1: 1
    order[validSort.replaceAll('-', '')] = direction
  } else {
    order.title = 1
  }
  const filter = {}
  if(title) filter.title = {$regex: title, $options: 'i'}
  if(price) filter.price = {$price: title, $options: 'i'}
  return bookModel.find(filter).skip(skip).limit(limit).sort(order)
}

const findAllByAuthorId = (authorId) => {
  return bookModel.find({'author._id': authorId})
}

const findOne = (id) => {
  return bookModel.findById(id)
}

const create = async ({ authorId, ...data }) => {
  const author = await authorModel.findById(authorId).then(at => at && at.toObject() || at)
  if(!author){
    throw new InvalidFieldError({field: 'authorId'})
  }
  return bookModel.create({ ...data, author })
}

const update = (id, data) => {
  return bookModel.findByIdAndUpdate(id, data)
}

const remove = (id) => {
  return bookModel.findByIdAndDelete(id)
}

export default {
  findAll,
  findAllByAuthorId,
  findOne, 
  create,
  update,
  remove
}
import { isValidObjectId } from 'mongoose'
import { InvalidFieldError } from '../errors/index.js'

const validateMongoId = (id, context)  => {
  if(!isValidObjectId(id)){
    throw new InvalidFieldError({context, field: 'id'})
  }
}

export default validateMongoId
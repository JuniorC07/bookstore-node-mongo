class HttpError extends Error {
  statusCode

  constructor ({ message = '', statusCode }) {
    super(message)
    this.statusCode = statusCode ?? 500
  }
}

class NotFoundError extends HttpError {
  constructor ({ context = 'data' }) {
    super({message: `${context} not found`})
  }
  statusCode = 404
}

class InvalidFieldError extends HttpError {
  constructor ({ context = '', field = 'data' }) {
    super({message: `You must provide a valid ${context && `${context} `}${field}`})
  }
  statusCode = 422
}

class MissingParamError extends HttpError {
  constructor (param) {
    super({message: `Missing param: ${param}`})
  }
  statusCode = 422
}

export { HttpError, NotFoundError, InvalidFieldError, MissingParamError }

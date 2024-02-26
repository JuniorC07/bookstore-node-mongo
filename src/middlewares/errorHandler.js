
const errorHandler = (error, _req, res, next) => {
  const status = 500
  const message = 'Internal Server Error'

  console.error(error)
  res.status(status).json({ message })
}

export default errorHandler

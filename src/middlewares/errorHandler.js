
// eslint-disable-next-line no-unused-vars 
const errorHandler = (error, _req, res, _next) => {
  const status = 500
  const message = 'Internal Server Error'

  console.error(error)
  res.status(status).json({ message })
}

export default errorHandler

const handleMethod = action => async (req, res, next) => {
  try {
    await action(req, res, next)
  } catch (error) {
    console.log('Error', next)
    next(error)
  }
}

export default handleMethod
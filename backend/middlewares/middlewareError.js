const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`)// req.originalUrl is the non existen url route inside the request body
    res.status(404)
    next(error)
}


const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json(
        {
            message: err.message,
            stack: process.env.NODE_ENV === 'PRODUCTION' ? null : err.stack,
        }
    )
}

export { notFound, errorHandler }
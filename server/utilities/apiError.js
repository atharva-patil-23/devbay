class apiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        error = [],
        statck = ''
    ){
        super(message)
        this.statusCode = statusCode
        this.code = null
        this.message = message
        this.success = false
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
    
}

export {apiError}

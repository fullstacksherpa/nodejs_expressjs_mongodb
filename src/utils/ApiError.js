//here we are declaring a new class ApiError which extends the build-in javascript Error class. By extending Error, ApiError inherits all the properties and method of Error, and allows us to create custom error objects with additional information

//constructor(...): This is the constructor method, which gets called whenever a new instance of ApiError is created. The constructor takes the following parameters: status code, message, errors, stack

//super(message): The super call passes the message parameter to the parent class (Error). This initializes the message property of the error with the provided value (or the default value if none is provided). The parent class Error uses this message when displaying the error.

class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };

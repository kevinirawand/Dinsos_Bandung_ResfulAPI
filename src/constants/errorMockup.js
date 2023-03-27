class BaseError extends Error {
   constructor(errorCode, message, statusCode) {
      super(message);

      this.errorCode = errorCode;
      this.statusCode = statusCode;
   }
}

export default BaseError;
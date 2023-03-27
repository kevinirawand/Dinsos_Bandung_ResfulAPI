import BaseError from "../constants/errorMockup.js";
import errorCodes from "../constants/errorCodes.js";
import statusCodes from "../constants/statusCodes.js";

const errorHandler = (err, req, res, next) => {
   console.error(err);
   if (err.name === "ValidationError") {
      const errorObj = {};

      for (const error of err.details) {
         errorObj[error.path] = [error.message];
      }

      return res.status(statusCodes.BAD_REQUEST).json({
         code: errorCodes.VALIDATION_ERROR.code,
         status: statusCodes.BAD_REQUEST,
         errors: errorObj
      })
   }

   if (err instanceof BaseError) {
      return res.status(err.statusCode).json({
         code: err.errorCode,
         status: err.statusCode,
         errors: {
            message: err.message
         }
      })
   }

   return res.status(500).json({
      code: 500,
      status: statusCodes.INTERNAL_SERVER,
      errors: {
         messages: err.message
      }
   });
}

export default errorHandler;
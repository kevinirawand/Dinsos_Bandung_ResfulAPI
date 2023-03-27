const validateResource = (schema) => async (req, res, next) => {
   try {
      const validated = schema.validate(req.body, {
         abortEarly: false,
         errors: {
            wrap: {
               label: ''
            }
         },
         convert: false
      });

      if (validated.error) {
         throw validated.error;
      }
   } catch (err) {
      return next(err);
   }
}

export default validateResource;
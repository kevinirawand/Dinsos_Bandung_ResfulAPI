import Joi from "joi";

export const userSignUpSchema = Joi.object({
   username: Joi
      .string()
      .required()
      .min(5)
      .max(10)
      .label('Username')
      .messages({
         "string.min": "Username must be at least 5 character",
         "string.max": "Username must be max 10 characters"
      }),

   password: Joi
      .string()
      .required()
      .min(5)
      .alphanum()
      .label("Password"),

   passwordConfirmation: Joi.any().valid(Joi.ref('password')).required().messages({
      "any.only": "Password Confirmation does not match"
   })
});

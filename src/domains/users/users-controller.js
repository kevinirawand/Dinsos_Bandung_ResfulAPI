import { userSignUp } from "./users-service.js";
import { userSignUpSchema } from "./users-schema.js";
import validateResource from "../../middlewares/validate-resource.js";

export const userSignUpHandler = async (req, res) => {
   await userSignUp(req.body);

   return res.status(200).json({
      code: 200,
      status: "OK",
      data: {
         message: "Success Signup"
      }
   });
}

import errorCodes from "../../constants/errorCodes.js";
import BaseError from "../../constants/errorMockup.js";
import statusCodes from "../../constants/statusCodes.js";
import UserModel from "./users-repository.js";


// export const syncUserTable = UserModel.sync();

export const userSignUp = async (credentials) => {
   const { username, password } = credentials;

   const user = await UserModel.findOne({
      where: {
         username: username
      }
   });

   // const user = undefined;

   if (user) throw new BaseError(
      errorCodes.TRY_TO_INSERT_ALREADY_UNIQUE_DATA,
      "Username Already Use",
      statusCodes.BAD_REQUEST
   );

   const createUser = await UserModel.create({
      username,
      password
   });

   return createUser;
}



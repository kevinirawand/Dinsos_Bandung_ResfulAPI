import { userSignUpHandler } from "./users-controller.js";
import express from "express";
import tryCatch from "../../utils/tryCatch.js";
import validateResource from "../../middlewares/validate-resource.js";
import { userSignUpSchema } from "./users-schema.js";

const Router = express.Router();

Router.post("/cctvtest", (req, res) => {
   return res.json(req.body);
});

export default Router;
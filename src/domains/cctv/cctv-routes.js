import express from "express";
import tryCatch from "../../utils/tryCatch.js";
import { addCctvListController, addCctvLocationController, createMultipleCctvLocation, getAllCctvListController, getAllCctvLocationController, getCctvListController } from "./cctv-controller.js";
import { CctvListModel, CctvLocationModel } from "./cctv-repository.js";

const Router = express.Router();

Router.post("/cctv-location", tryCatch(addCctvLocationController));

Router.get("/cctv-location", tryCatch(getAllCctvLocationController));


Router.post("/cctv-location/list", tryCatch(addCctvListController));

// Router.get("/cctv-location/list/(:id_cctv_lokasi)", tryCatch(getAllCctvListController));

Router.get('/cctv-location/list', tryCatch(getAllCctvListController));

Router.get("/cctv-location/list/(:lat)&(:lng)", tryCatch(getCctvListController));

Router.get("/cctv-location/seeder", createMultipleCctvLocation);


export default Router;
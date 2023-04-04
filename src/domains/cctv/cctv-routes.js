import express from "express";
import tryCatch from "../../utils/tryCatch.js";
import { addCctvListController, addCctvLocationController, createMultipleCctvLocation, getAllCctvListController, getAllCctvLocationController, getCctvListController, createMultipleCctvList, getCctvLocationController, getAllCctvLocationListController } from "./cctv-controller.js";


const Router = express.Router();


// Add CCTV Location
Router.post("/cctv-location", tryCatch(addCctvLocationController));

// Get All CCTV Location
Router.get("/cctv-location", tryCatch(getAllCctvLocationController));

// Get Detail CCTV Location
Router.get("/cctv-location/(:id)", tryCatch(getCctvLocationController));





// Add CCTV list Location 
Router.post("/cctv-location/(:id_cctv_lokasi)/list/", tryCatch(addCctvListController));

// Get All CCTV List Location
Router.get('/cctv-location/(:id_cctv_lokasi)/list/', tryCatch(getAllCctvLocationListController));

// Get Detail CCTV List Location
Router.get("/cctv-location/(:id_cctv_lokasi)/list/(:lat)&(:lng)", tryCatch(getCctvListController));



// SEEDER TO EXTACT NEW RESPONSE EXTERNAL RESOURCE
Router.get("/cctv-location/seeder", createMultipleCctvLocation);

Router.get("/cctv-list/seeder", createMultipleCctvList);


export default Router;
import BaseError from '../../constants/errorMockup.js';
import errorCodes from '../../constants/errorCodes.js';
import statusCodes from '../../constants/statusCodes.js';
import {
   findOneCctvLocation,
   createCctvLocation,
   getAllCctvLocation,
   createCctvList,
   findOneCctvList,
   getAllCctvList,
   getCctvLocation,
   getAllCctvListById,
   findOneCctvLocationById
} from './cctv-service.js';
import fetch from "node-fetch";
import axios from 'axios';

export const addCctvLocationController = async (req, res) => {
   const { nama_lokasi } = req.body;

   const cctv = await findOneCctvLocation(nama_lokasi);

   if (cctv)
      throw new BaseError(
         errorCodes.CCTV_LOCAION_IS_ALREADY.code,
         errorCodes.CCTV_LOCAION_IS_ALREADY.message,
         statusCodes.BAD_REQUEST
      );

   await createCctvLocation(req.body);

   return res.status(200).json({
      code: 200,
      status: 'OK',
      data: {
         message: 'Success Add CCTV Location',
      },
   });
};

export const getAllCctvLocationController = async (req, res) => {
   const cctvLocationArr = await getAllCctvLocation();

   return res.status(200).json({
      code: 200,
      status: 'OK',
      data: {
         message: 'Success Get All CCTV List',
         cctvLocationArr,
      },
   });
};

export const getCctvLocationController = async (req, res) => {
   const result = await findOneCctvLocationById(req.params.id);

   if (!result)
      throw new BaseError(
         errorCodes.VALIDATION_ERROR.code,
         errorCodes.VALIDATION_ERROR.message,
         statusCodes.BAD_REQUEST
      );

   return res.status(200).json({
      code: 200,
      status: 'OK',
      data: {
         result
      },
   });
}

export const addCctvListController = async (req, res) => {
   const { nama_cctv } = req.body;
   console.info(req.params.id_cctv_lokasi);

   const cctv = await findOneCctvList(nama_cctv);

   if (cctv)
      throw new BaseError(
         errorCodes.CCTV_LIST_IS_ALREADY.code,
         errorCodes.CCTV_LIST_IS_ALREADY.message,
         statusCodes.BAD_REQUEST
      );

   await createCctvList({
      id_cctv_lokasi: req.params.id_cctv_lokasi,
      nama_cctv: req.body.nama_cctv,
      stream: req.body.stream
   });

   return res.status(200).json({
      code: 200,
      status: 'OK',
      data: {
         message: 'Success Add CCTV List',
      },
   });
};

export const createMultipleCctvLocation = async (req, res) => {
   // const response = await fetch("https://pelindung.bandung.go.id:8443/api/cek")
   //    .then((res) => {
   //       console.info("THIS RESPONSE")
   //       console.info(res.body)
   //       res.json()
   //    }).then((json) => {
   //       console.info("THIS JSON")
   //       console.info(json);
   //    });

   const response = await axios.get("https://pelindung.bandung.go.id:8443/api/cek");



   // response.json();
   // console.info(response.body);
   // return res.status(200).json(response);

   for (const location in response.data) {
      await createCctvLocation({
         nama_lokasi: response.data[location].cctv_name,
         latitude: response.data[location].lat,
         longitude: response.data[location].lng
      });

   }
};

export const createMultipleCctvList = async (req, res) => {
   const response = await axios.get("https://pelindung.bandung.go.id:8443/api/cek");

   let i = 368;
   for (const location in response.data) {
      await createCctvList({
         id_cctv_lokasi: i,
         nama_cctv: response.data[location].cctv_name,
         stream: response.data[location].stream_cctv
      });
      i++;
   }
}

export const getAllCctvListController = async (req, res) => {
   const cctvListArr = await getAllCctvList();

   return res.status(200).json({
      code: 200,
      status: 'OK',
      data: {
         message: 'Success Get All CCTV Location',
         cctvListArr,
      },
   });
}

export const getAllCctvLocationListController = async (req, res) => {
   const result = await getAllCctvListById(req.params.id_cctv_lokasi);

   return res.status(200).json({
      code: 200,
      status: 'OKE',
      data: {
         message: 'Success Get All CCTV Location List',
         result
      }
   });
}

export const getCctvListController = async (req, res) => {
   const lat_location = req.params.lat;
   const lng_location = req.params.lng;
   const thatCctvLocation = await getCctvLocation(
      lat_location,
      lng_location
   );

   const cctvLocationId = thatCctvLocation.id_cctv_lokasi;
   console.info(cctvLocationId);

   const cctvList = await getAllCctvListById(cctvLocationId);

   return res.status(200).json({
      code: 200,
      status: 'OK',
      data: {
         message: 'Success Get All CCTV Location',
         cctvList,
      },
   });
};
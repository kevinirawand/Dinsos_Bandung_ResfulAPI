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
   getAllCctvListById
} from './cctv-service.js';
import { CctvListModel, CctvLocationModel } from './cctv-repository.js';

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

export const addCctvListController = async (req, res) => {
   const { nama_cctv } = req.body;

   const cctv = await findOneCctvList(nama_cctv);

   if (cctv)
      throw new BaseError(
         errorCodes.CCTV_LIST_IS_ALREADY.code,
         errorCodes.CCTV_LIST_IS_ALREADY.message,
         statusCodes.BAD_REQUEST
      );

   await createCctvList(req.body);

   return res.status(200).json({
      code: 200,
      status: 'OK',
      data: {
         message: 'Success Add CCTV List',
      },
   });
};

export const createMultipleCctvLocation = async () => {
   const locations = [
      {
         nama_lokasi: 'SP Soekarno Hatta -  Kopo',
         latitude: '-6.945582',
         longitude: '107.58961',
      },
      {
         nama_lokasi: 'SP Soekarno Hatta -  Pasar Caringin',
         latitude: '-6.94311',
         longitude: '107.584429',
      },
      {
         nama_lokasi: 'SP Soekarno Hatta -  Pasir Koja',
         latitude: '-6.930429',
         longitude: '107.576033',
      },
      {
         nama_lokasi: 'SP Soekarno Hatta -  Cibeureum',
         latitude: '-6.917283',
         longitude: '107.574366',
      },
      {
         nama_lokasi: 'SP Sudirman -  Jamika',
         latitude: '-6.918823',
         longitude: '107.586506',
      },
      {
         nama_lokasi: 'SP Sudirman -  Gardujati',
         latitude: '-6.920126',
         longitude: '107.598345',
      },
      {
         nama_lokasi: 'SP Sudirman -  Otista',
         latitude: '-6.920816',
         longitude: '107.604102',
      },
      {
         nama_lokasi: 'SP Asia Afrika -  Tamblong',
         latitude: '-6.921806',
         longitude: '107.611913',
      },
      {
         nama_lokasi: 'SP Asia Afrika -   Sp Lima',
         latitude: '-6.922399',
         longitude: '107.617551',
      },
      {
         nama_lokasi: 'SP A Yani - Gudang Utara',
         latitude: '-6.917192',
         longitude: '107.627341',
      },
      {
         nama_lokasi: 'SP A Yani - Laswi',
         latitude: '-6.915761',
         longitude: '107.629992',
      },
      {
         nama_lokasi: 'SP A Yani - Supratman',
         latitude: '-6.913462',
         longitude: '107.634428',
      },
      {
         nama_lokasi: 'SP Djunjunan - Tol Pasteur',
         latitude: '-6.892164',
         longitude: '107.581369',
      },
      {
         nama_lokasi: 'SP Pasir Kaliki - Tjokroaminoto',
         latitude: '-6.900283',
         longitude: '107.597443',
      },
      {
         nama_lokasi: 'SP Pasteur - Cipaganti',
         latitude: '-6.900291',
         longitude: '107.602294',
      },
      {
         nama_lokasi: 'SP Pasteur - Cihampelas',
         latitude: '-6.900245',
         longitude: '107.604242',
      },
      {
         nama_lokasi: 'SP Pasteur - Tamansari',
         latitude: '-6.898188',
         longitude: '107.609552',
      },
      {
         nama_lokasi: 'SP Dago - Cikapayang',
         latitude: '-6.898954',
         longitude: '107.61269',
      },
      {
         nama_lokasi: 'SP Dago - Sulanjana',
         latitude: '-6.900167',
         longitude: '107.612536',
      },
      {
         nama_lokasi: 'SP Merdeka - Juanda',
         latitude: '-6.907004',
         longitude: '107.610599',
      },
      {
         nama_lokasi: 'SP Surapati - Sentot Alibasyah (Telkom)',
         latitude: '-6.899543',
         longitude: '107.627126',
      },
      {
         nama_lokasi: 'SP Riau - Trunojoyo',
         latitude: '-6.906969',
         longitude: '107.612732',
      },
      {
         nama_lokasi: 'SP Riau - Banda',
         latitude: '-6.906133',
         longitude: '107.616826',
      },
      {
         nama_lokasi: 'SP Riau - Lombok',
         latitude: '-6.905945',
         longitude: '107.621375',
      },
      {
         nama_lokasi: 'SP Riau - Cihapit',
         latitude: '-6.907493',
         longitude: '107.623308',
      },
      {
         nama_lokasi: 'SP Riau - Aceh',
         latitude: '-6.910156',
         longitude: '107.626138',
      },
      {
         nama_lokasi: 'SP Riau - Anggrek',
         latitude: '-6.912698',
         longitude: '107.628617',
      },
      {
         nama_lokasi: 'SP Phh Mustofa - Cikutra',
         latitude: '-6.899872',
         longitude: '107.643426',
      },
      {
         nama_lokasi: 'SP Phh Mustofa -  Cimuncang',
         latitude: '-6.901719',
         longitude: '107.649846',
      },
      {
         nama_lokasi: 'SP Phh Mustofa - Pahlawan',
         latitude: '-6.89775',
         longitude: '107.634197',
      },
      {
         nama_lokasi: 'SP Phh Mustofa -  Padasuka',
         latitude: '-6.901942',
         longitude: '107.65357',
      },
      {
         nama_lokasi: 'SP Cicaheum',
         latitude: '-6.902065',
         longitude: '107.655038',
      },
      {
         nama_lokasi: 'SP Ujung Berung - Jl Rumah Sakit\n',
         latitude: '-6.914055',
         longitude: '107.69941',
      },
      {
         nama_lokasi: 'Ruas Jalan Riau (Martadinata)',
         latitude: '-6.906835',
         longitude: '107.613074',
      },
      {
         nama_lokasi: 'Merdeka - Aceh',
         latitude: '-6.909809',
         longitude: '107.610527',
      },
      {
         nama_lokasi: 'Ruas Sudirman - Otista',
         latitude: '-6.920567',
         longitude: '107.602618',
      },
      {
         nama_lokasi: 'Ruas Sudirman - Gardujati',
         latitude: '-6.92015',
         longitude: '107.599097',
      },
      {
         nama_lokasi: 'SP Malabar - Gatsu',
         latitude: '-6.923789',
         longitude: '107.624261',
      },
      {
         nama_lokasi: 'SP Lingkar - Gatsu',
         latitude: '-6.924541',
         longitude: '107.627712',
      },
      {
         nama_lokasi: 'SP Lingkar - Talaga Bodas',
         latitude: '-6.929531',
         longitude: '107.62647',
      },
      {
         nama_lokasi: 'SP Lingkar - Martanegara',
         latitude: '-6.932602',
         longitude: '107.625751',
      },
      {
         nama_lokasi: 'SP Lingkar - Buah Batu',
         latitude: '-6.936933',
         longitude: '107.622727',
      },
      {
         nama_lokasi: 'SP Lingkar - Sriwijaya',
         latitude: '-6.93789',
         longitude: '107.612768',
      },
      {
         nama_lokasi: 'SP Lingkar - M Ramdan',
         latitude: '-6.937607',
         longitude: '107.609122',
      },
      {
         nama_lokasi: 'SP BKR - M Toha',
         latitude: '-6.937506',
         longitude: '107.606205',
      },
      {
         nama_lokasi: 'SP BKR - Otista',
         latitude: '-6.937332',
         longitude: '107.603032',
      },
      {
         nama_lokasi: 'SP Tjokroaminoto - Pajajaran (Istana Plaza)',
         latitude: '-6.906687',
         longitude: '107.59856',
      },
      {
         nama_lokasi: 'SP Cihampelas - Ciumbuleuit',
         latitude: '-6.883331',
         longitude: '107.604912',
      },
      {
         nama_lokasi: 'SP Djuanda - Dipatiukur',
         latitude: '-6.885209',
         longitude: '107.613712',
      },
      {
         nama_lokasi: 'SP Abdurahman Saleh - Pajajaran ',
         latitude: '-6.906807',
         longitude: '107.587681',
      },
   ];

   for (const location in locations) {
      await createCctvLocation(locations[location]);
   }
};

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
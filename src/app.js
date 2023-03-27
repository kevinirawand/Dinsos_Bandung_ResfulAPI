import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/error-handling.js";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const allowCrossDomain = function (req, res, next) {
   res.header('Access-Control-Allow-Origin', "*");
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();
};



app.use(express.json());

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '../public/views'));
app.use(express.static(path.join(__dirname, '../public')));

app.use(cors({
   'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization', 'authorization'],
   'exposedHeaders': ['sessionId'],
   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
   'credentials': false,
   'preflightContinue': false
}));

app.use(allowCrossDomain);

const router = express.Router();
routes(router, app);
app.use(router);
app.use(errorHandler);

export default app;
import {Router} from "express";
import {index, store} from "../controllers/barang.controller.js";
import {uploadImageProduk} from "../middlewares/uploadImage.js";
import {barangValid} from "../middlewares/validation/barang.validation.js";
import handleValidation from "../middlewares/handleValidation.js";
import {barangResult} from "../middlewares/isResult/barang.result.js";
const barangRoute = Router();

// untuk mengambil seluruh data barang
barangRoute.get("/all", index);

// untuk tambah barang
barangRoute.post("/create", uploadImageProduk, barangValid, handleValidation, barangResult, store);
export default barangRoute;

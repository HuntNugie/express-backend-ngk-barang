import { Router } from "express";
import { index } from "../controllers/barang.controller.js";

const barangRoute = Router();

// untuk mengambil seluruh data barang
barangRoute.get("/all",index)

export default barangRoute
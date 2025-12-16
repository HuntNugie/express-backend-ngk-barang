import { Router } from "express";
import authRoute from "./auth.route.js"
import barangRoute from "./barang.route.js";
import { isAuth } from "../middlewares/isAuth.js";
const route = Router();

// untuk auth
route.use("/auth",authRoute)

// untuk barang
route.use("/produk",isAuth,barangRoute)


export default route
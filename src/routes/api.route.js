import { Router } from "express";
import authRoute from "./auth.route.js"
const route = Router();

// untuk auth
route.use("/auth",authRoute)

export default route
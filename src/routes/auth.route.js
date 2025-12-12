import { Router } from "express";
import { register } from "../controllers/auth.controller.js";
import regisValid from "../middlewares/validation/register.validation.js";
import handleValidation from "../middlewares/handleValidation.js";

const route  = Router();

// untuk register
route.post("/register",regisValid,handleValidation, register )

export default route
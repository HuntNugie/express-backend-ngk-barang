import { Router } from "express";
import { checkMe, register } from "../controllers/auth.controller.js";
import regisValid from "../middlewares/validation/register.validation.js";
import handleValidation from "../middlewares/handleValidation.js";
import { result } from "../middlewares/isResult/regisResult.js";

const route  = Router();

// untuk register
route.post("/register",regisValid,handleValidation,result, register )

// untuk check me
route.get("/me",checkMe);
export default route
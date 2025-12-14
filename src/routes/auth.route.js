import { Router } from "express";
import { checkMe, login, logout, register } from "../controllers/auth.controller.js";
import regisValid from "../middlewares/validation/register.validation.js";
import handleValidation from "../middlewares/handleValidation.js";
import { result } from "../middlewares/isResult/regisResult.js";
import { isAuth } from "../middlewares/isAuth.js";
import { loginValid } from "../middlewares/validation/login.validation.js";
import { loginResult } from "../middlewares/isResult/loginResult.js";

const route  = Router();

// untuk register
route.post("/register",regisValid,handleValidation,result, register )

// untuk check me
route.get("/me",isAuth,checkMe);

// untuk logout
route.post("/logout",logout);

// untuk login
route.post("/login",loginValid,handleValidation,loginResult,login)
export default route
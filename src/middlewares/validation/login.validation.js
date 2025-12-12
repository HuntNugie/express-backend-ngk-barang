import {body} from "express-validator";
import User from "../../models/User.js";

export const loginValid = [
    body("username")
    .notEmpty()
    .withMessage("username tidak boleh kosong")
    .isString()
    .withMessage("username harus berbentuk string")
    .custom(async (value, {req}) => {
        try {
            const data = await User.findUniqueOrThrow({
                where: {username: value},
                include:{
                    profile:true
                }
            });
            req.user = data;
            return true;
        } catch (error) {
            throw new Error("username belum pernah mendaftar");
        }
    }),
    body("password")
    .notEmpty().withMessage("password tidak boleh kosong")
    .isString().withMessage("password harus berbentuk text")
];

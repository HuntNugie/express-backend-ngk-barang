import {body} from "express-validator";
import User from "../../models/User.js";
const regisValid = [
    body("username")
    .notEmpty()
    .withMessage("username tidak boleh kosong")
    .isString()
    .withMessage("username harus berbentuk string")
    .isLength({min: 8})
    .withMessage("username minimal 8 karakter")
    .custom(async (value, {req}) => {
        const user = await User.findUnique({
            where: {
                username: value||"",
            },
        });
        if (user) {
            throw new Error("username sudah di gunakan");
        }
        return true;
    }),

    body("password")
    .notEmpty()
    .withMessage("password tidak boleh kosong")
    .isString()
    .withMessage("password harus berbentuk string"),

    body("confirm_password")
    .notEmpty()
    .withMessage("konfirmasi password tidak boleh kosong")
    .isString()
    .withMessage("konfirmasi password harus berbentuk string")
    .custom((value, {req}) => {
        if (value !== req.body.password) {
            throw new Error("konfirmasi password tidak sama dengan password");
        }
        return true;
    }),

    body("nama").notEmpty().withMessage("nama tidak boleh kosong").isString().withMessage("nama harus berbentuk text"),

    body("jenis_kelamin")
    .notEmpty()
    .withMessage("jenis kelamin tidak boleh kosong")
    .isString()
    .withMessage("jenis kelamin harus berbentuk string"),

    body("tgl_lahir")
    .notEmpty()
    .withMessage("tanggal lahir tidak boleh kosong")
    .isDate()
    .withMessage("tanggal lahir harus berbentuk tanggal"),
];

export default regisValid;

import {body} from "express-validator";

export const barangValid = [
    body("nama_barang")
    .notEmpty()
    .withMessage("nama barang tidak boleh kosong")
    .isString()
    .withMessage("nama barang harus berbentuk string"),
    body("harga")
    .notEmpty()
    .withMessage("harga tidak boleh kosong")
    .isDecimal()
    .withMessage("harga harus berbentuk nomor"),
    body("stok_barang")
    .notEmpty()
    .withMessage("stok tidak boleh kosong")
    .isDecimal()
    .withMessage("stok harus berbentuk angka"),
];

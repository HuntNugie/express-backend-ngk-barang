import Barang from "../models/Barang.js";
import resJson from "../../utils/getRulesResponse.js";
// untuk mendapatkan seluruh data
export const index = async (req, res) => {
    try {
        const data = await Barang.findMany();
        return res.json({status: true, data});
    } catch (error) {
        return res.status(404).json({status: false, error});
    }
};

// untuk menambahkan produk
export const store = async (req, res) => {
    console.log(req.result)
    try {
        await Barang.create({
            data: req.result,
        });
        return res.status(200).json(resJson.response.success.suc_add_barang);
    } catch (err) {
        return res.status(400).json(err);
    }
};

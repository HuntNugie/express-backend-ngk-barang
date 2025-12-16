import Barang from "../models/Barang.js"

// untuk mendapatkan seluruh data
export const index = async(req,res)=>{
    try {
        const data = await Barang.findMany();
        return res.json({status:true,data})
    } catch (error) {
        return res.status(404).json({status:false,error})
    }
}


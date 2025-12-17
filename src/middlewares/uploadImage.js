import multer from "multer";
import fs from "fs";
import path from "path";
import {config} from "dotenv";
config();

// ambil konfigurasi
const uploadPath = path.join(process.cwd(), process.env.UPLOAD_PATH);

// cek apakah ada
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, {recursive: true});
}


// untuk penyimpanan
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },
    filename:(req,file,cb)=>{
        const ext = path.extname(file.originalname);
    const namaBaru = `${Date.now()}-${Math.round(Math.random() * 100000000000)}`
        cb(null,namaBaru+ext)
    }
});


// filter yang di terima harus lah gambar
const isImage = (req,file,cb)=>{
    if(file.mimetype.startsWith("image/")){
        cb(null,true)
    }else{
        cb(new Error("file harus berupa gambar"),false)
    }
}

// buat upload
const uploadImage = multer({
    storage,
    fileFilter:isImage,
    limits:{
        fileSize:5000000
    }
})

export const uploadImageProduk = uploadImage.single("foto");

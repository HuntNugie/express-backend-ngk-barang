import User from "../models/User.js";
import {compare} from "../../utils/bcrypt.js";
import resJson from "../../utils/getRulesResponse.js";
import {ttd} from "../../utils/jwt.js";
export const register = async (req, res) => {
    try {
        const add = await User.create({
            data: req.result,
            include: {
                profile: true,
            },
        });
        return res.status(200).json({
            status: true,
            data: add,
        });
    } catch (error) {
        return res.status(400).json({
            status: false,
            error,
        });
    }
};

// untuk mengecek apakah token jwt valid
export const checkMe = async (req, res) => {
    return res.status(200).json(req.payload);
};

// untuk request login
export const login = async (req, res) => {
    const {password} = req.result;
    const match = await compare(password, req.body.password);

    if (!match) {
        return res.status(400).json(resJson.response.error.err_falsePassword);
    }
    // buat token
    const token = ttd(req.user);

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 60 * 60 * 1000,
        path:"/"
    });
    return res.status(200).json(req.user);
};

export const logout = async(req,res)=>{
    res.clearCookie("token",{
        httpOnly:true,
        sameSite:"none",
        secure:true
    });

    return res.status(200).json({status:true,message:"berhasil logout"})
}

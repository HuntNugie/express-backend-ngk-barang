import User from "../models/User.js";
import resJson from "../../utils/getRulesResponse.js";
import { klarif } from "../../utils/jwt.js";
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

export const checkMe = async (req, res) => {
    try {
        const token = req.cookies.token;
        if(!token){
            throw resJson.response.error.err_NoToken
        }
        const payload = klarif(token);
        return res.status(200).json(payload)
    } catch (error) {
        return res.status(401).json(error)
    }
};

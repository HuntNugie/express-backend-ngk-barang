import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const secret = process.env.SECRET_JWT;

export const ttd = (payload)=>{
    const token = jwt.sign(payload,secret,{expiresIn:"1h"});
    return token
}

export const klarif = (token)=>{
    const payload = jwt.verify(token,secret);
    return payload
}
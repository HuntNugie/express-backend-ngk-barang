import bcrypt from "bcrypt";
import { config } from "dotenv";
config();

const salt = parseInt(process.env.SALT_HASH);
export const hash = (string)=>{
    const hashing = bcrypt.hashSync(string,salt);
    return hashing
}

export const compare = async(hashing,string)=>{
    const result = await bcrypt.compare(string,hashing);
    return result
}

import {klarif} from "../../utils/jwt.js";
import resJson from "../../utils/getRulesResponse.js";
export const isAuth = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            throw resJson.response.error.err_NoToken;
        }
        req.payload = klarif(token);

        next();
    } catch (error) {
        return res.status(401).json(error);
    }
};

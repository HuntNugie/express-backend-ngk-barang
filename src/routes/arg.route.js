import {Router} from "express";
import apiRoute from "./api.route.js"
import log from "../middlewares/log.middleware.js";
import resJson from "../../utils/getRulesResponse.js";

const indexRoute = Router();

indexRoute.get("/", log, (req, res) => {
    res.json(resJson.response.opening);
});
indexRoute.use("/api", apiRoute);
export default indexRoute;

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import indexRoute from "./src/routes/arg.route.js";
import fs from "fs";
import log from "./src/middlewares/log.middleware.js";

const rawJson = fs.readFileSync("./response.json","utf-8");
const resJson = JSON.parse(rawJson);

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use(cookieParser());

// untuk route
app.get("/", log, (req, res) => {
    res.json(resJson.response.opening);
});
app.use("/api", indexRoute);

export default app;

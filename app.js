import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import indexRoute from "./src/routes/arg.route.js";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
        allowedHeaders:["Content-Type","Authorization"]
    })
);
app.use(express.json());
app.use(cookieParser());

// untuk route
app.use(indexRoute);

export default app;

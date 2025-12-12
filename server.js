import app from "./app.js";
import {config} from "dotenv";
config();
const server = process.env.SERVER_PORT;

app.listen(server, () => {
    console.log(`berjalan di http://localhost:${server}`);
});

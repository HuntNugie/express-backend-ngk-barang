import fs from "fs";

const rawJson = fs.readFileSync("./response.json", "utf-8");
const resJson = JSON.parse(rawJson);

export default resJson;

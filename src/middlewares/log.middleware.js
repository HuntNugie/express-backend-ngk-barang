export default function log(req,res,next){
    const time = new Date().toISOString();
    console.log(`${time} : ${req.method} ${req.originalUrl}`);
    next();
}
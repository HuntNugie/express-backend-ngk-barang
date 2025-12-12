export const loginResult = (req,res,next)=>{
    const {username,password} = req.user;
    req.result = {username,password};
    next();
}
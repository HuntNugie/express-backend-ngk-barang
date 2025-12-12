import User from "../models/User.js";
export const register = async (req, res) => {
    try {
        const add = await User.create({
            data: req.result,
            include: {
                profile: true,
            },
        });
        return res.status(200).json({
            status: true,
            data: add,
        });
    } catch (error) {
        return res.status(400).json({
            status: false,
            error,
        });
    }
};

import { hash } from "../../../utils/bcrypt.js";

export const result = (req, res, next) => {
    req.result = {
        username: req.body.username,
        password: hash(req.body.password),
        profile: {
            create: {
                nama: req.body.nama,
                jenis_kelamin: req.body.jenis_kelamin,
                tgl_lahir: new Date(req.body.tgl_lahir).toISOString(),
            },
        },
    };
    next();
};

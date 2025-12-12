export const result = (req, res, next) => {
    req.result = {
        username: req.body.username,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
        nama: req.body.nama,
        jenis_kelamin: req.body.jenis_kelamin,
        tgl_lahir: new Date(req.body.tgl_lahir).toISOString(),
    };
    next();
};

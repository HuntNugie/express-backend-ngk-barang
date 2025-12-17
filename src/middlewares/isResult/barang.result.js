export const barangResult = (req, res, next) => {
    req.result = {
        nama_barang: req.body.nama_barang,
        stok_barang: parseInt(req.body.stok_barang),
        harga: parseFloat(req.body.harga),
        foto: req.file.filename,
    };

    next();
};

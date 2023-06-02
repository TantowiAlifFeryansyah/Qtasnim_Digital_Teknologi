const { Sales } = require('../models')

class Controller {
    static async getSales(req, res, next) {
        try {
            const data = await Sales.findAll();
            res.status(200).json({ message: 'get data successful', data})
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async create(req, res, next) {
        try {
            const { nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang } = req.body
            const data = await Sales.create({nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang});
            res.status(201).json({ message: 'created successfully', data })
        }catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

}

module.exports = Controller;

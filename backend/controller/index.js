const { Sales } = require('../models')
const { Op } = require('sequelize');

class Controller {
    static async getSales(req, res, next) {
        try {
            // const {}
            const data = await Sales.findAll();
            res.status(200).json({ message: 'Permintaan sukses dan data berhasil ditemukan', data })
        } catch (error) {
            res.status(404).json({ message: 'Data yang diminta tidak ditemukan' });
        }
    }

    static async create(req, res, next) {
        try {
            const { nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang } = req.body
            const data = await Sales.create({ nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang });
            res.status(201).json({ message: 'Data berhasil dibuat', data })
        } catch (error) {
            res.status(400).json({ message: 'Permintaan tidak valid atau data yang dikirim tidak valid' });
        }
    }

    static async update(req, res, next) {
        try {
            const { nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang } = req.body
            const { id } = req.params
            const data = await Sales.update({ nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang }, {
                where: { id }
            })
            res.status(200).json({ message: 'Data berhasil diperbarui.', data })
        } catch (error) {
            res.status(400).json({ message: 'Permintaan tidak valid atau data yang dikirim tidak valid' });
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params
            const data = await Sales.destroy({ where: { id } })
            res.status(200).json({ message: 'Data berhasil dihapus.', data })
        } catch (error) {
            res.status(404).json({ message: 'Data yang akan dihapus tidak ditemukan' });
        }
    }
}

module.exports = Controller;

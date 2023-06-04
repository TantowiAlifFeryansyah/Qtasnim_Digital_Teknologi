const { Sales } = require('../models')
const { Op } = require('sequelize');

class Controller {
    static async getSales(req, res, next) {
        try {
            const { nama_barang, a_z, z_a, tanggal_transaksi_terkini, tanggal_transaksi_terlama, jumlah_terjual_terbanyak, startDate, endDate, show, currentPage } = req.query;
            const page = +currentPage || 1;
            const limit = show || 10;
            const offset = (page - 1) * limit;
            const total = await Sales.count();
            const pages = Math.ceil(total / limit);

            let option = { limit, offset }

            if (nama_barang) {
                option = { ...option, where: { nama_barang: { [Op.like]: `%${nama_barang}%` } } }
            } else if (a_z) {
                option = { ...option, order: [['nama_barang', 'ASC']] }
            } else if (z_a) {
                option = { ...option, order: [['nama_barang', 'DESC']] }
            } else if (tanggal_transaksi_terkini) {
                option = { ...option, order: [['tanggal_transaksi', 'DESC']] }
            } else if (tanggal_transaksi_terlama) {
                option = { ...option, order: [['tanggal_transaksi', 'ASC']] }
            } else if (jumlah_terjual_terbanyak) {
                if (startDate && endDate) {
                    option = { ...option, where: { tanggal_transaksi: { [Op.between]: [startDate, endDate] } }, order: [['jumlah_terjual', 'DESC']] }
                } else if (startDate) {
                    const hari_ini = new Date()
                    option = { ...option, where: { tanggal_transaksi: { [Op.between]: [startDate, hari_ini] } }, order: [['jumlah_terjual', 'DESC']] }
                } else if (endDate) {
                    option = { ...option, where: { tanggal_transaksi: { [Op.lt]: endDate } }, order: [['jumlah_terjual', 'DESC']] }
                } else {
                    option = { ...option, order: [['jumlah_terjual', 'DESC']] }
                }
            }
            const data = await Sales.findAll(option)
            res.status(200).json({ message: 'Permintaan sukses dan data berhasil ditemukan', data, pages: pages, total })

        } catch (error) {
            res.status(404).json({ message: 'Data yang diminta tidak ditemukan' });
        }
    }

    static async create(req, res, next) {
        try {
            console.log('ini body', req.body);
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

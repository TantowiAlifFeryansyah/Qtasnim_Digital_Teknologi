import { Component } from "react"

export default class SaleItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nama_barang: props.sale.nama_barang,
            stok: props.sale.stok,
            jumlah_terjual: props.sale.jumlah_terjual,
            tanggal_transaksi: props.sale.tanggal_transaksi,
            jenis_barang: props.sale.jenis_barang,
            isEdit: false
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleEdit = () => {
        this.setState({
            isEdit: true
        });
    }

    handleCancel = () => {
        this.setState({
            isEdit: false
        });
    }

    saveEdit = () => {
        this.props.update({ _id: this.props.sale._id, nama_barang: this.state.nama_barang, stok: this.state.stok, jumlah_terjual: this.state.jumlah_terjual, tanggal_transaksi: this.state.tanggal_transaksi, jenis_barang: this.state.jenis_barang })
        this.setState({
            isEdit: false
        });
    }

    render() {
        return (
            <tr>
                <td>{this.props.no}</td>
                <td>
                    {this.state.isEdit ?
                        <input
                            className="form-control"
                            type="teks"
                            name="nama_barang"
                            value={this.state.nama_barang}
                            placeholder="Nama Barang"
                            onChange={this.handleInputChange}
                        />
                        :
                        this.state.nama_barang
                    }
                </td>

                <td>
                    {this.state.isEdit ?
                        <input
                            className="form-control"
                            type="teks"
                            name="stok"
                            value={this.state.stok}
                            placeholder="Stok Awal"
                            onChange={this.handleInputChange}
                        />
                        :
                        this.state.stok
                    }
                </td>

                <td>
                    {this.state.isEdit ?
                        <input
                            className="form-control"
                            type="teks"
                            name="jumlah_terjual"
                            value={this.state.jumlah_terjual}
                            placeholder="Stok Keluar"
                            onChange={this.handleInputChange}
                        />
                        :
                        this.state.jumlah_terjual
                    }
                </td>

                <td>
                    {this.state.isEdit ?
                        <input
                            className="form-control"
                            type="date"
                            name="tanggal_transaksi"
                            value={this.state.tanggal_transaksi}
                            placeholder="Tanggal Transaksi"
                            onChange={this.handleInputChange}
                        />
                        :
                        this.state.tanggal_transaksi
                    }
                </td>

                <td>
                    {this.state.isEdit ?
                        <input
                            className="form-control"
                            type="teks"
                            name="jenis_barang"
                            value={this.state.jenis_barang}
                            placeholder="Jenis Barang"
                            onChange={this.handleInputChange}
                        />
                        :
                        this.state.jenis_barang
                    }
                </td>


                {this.props.sale.sent ?
                    this.state.isEdit ?
                        <td>
                            <button type="button" className="btn btn-info" onClick={this.saveEdit}>Simpan</button>
                            <button type="button" className="btn btn-warning" onClick={this.handleCancel}>Kembali</button>
                        </td>

                        :

                        <td>
                            <button type="button" className="btn btn-success" onClick={this.handleEdit}>Edit</button>
                            <button type="button" className="btn btn-danger" onClick={this.props.remove}>Hapus</button>
                        </td>
                    :
                    <td>

                        <button type="button" className="btn btn-warning" onClick={this.props.remove}>Resend</button>
                    </td>

                }
            </tr>
        )
    }
}
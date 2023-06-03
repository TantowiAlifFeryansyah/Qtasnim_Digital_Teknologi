import { Component } from "react";

export default class SaleForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nama_barang: null,
            stok: null,
            jumlah_terjual: null,
            tanggal_transaksi: null,
            jenis_barang: null,
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

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submit({nama_barang: this.state.nama_barang, stok: this.state.stok, jumlah_terjual: this.state.jumlah_terjual, tanggal_transaksi: this.state.tanggal_transaksi, jenis_barang: this.state.jenis_barang})
        this.setState({
            nama_barang: '',
            stok: '',
            jumlah_terjual: '',
            tanggal_transaksi: '',
            jenis_barang: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="nama_barang" className="col-sm-2 col-form-label">Nama Barang</label>
                    <div className="col-sm-10">
                        <input type="teks" className="form-control" name="nama_barang" id="nama_barang" onChange={this.handleInputChange} value={this.state.nama_barang} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="stok" className="col-sm-2 col-form-label">Stok</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" name="stok" id="stok" onChange={this.handleInputChange} value={this.state.stok} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="jumlah_terjual" className="col-sm-2 col-form-label">Jumlah Terjual</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" name='jumlah_terjual' id="jumlah_terjual" onChange={this.handleInputChange} value={this.state.jumlah_terjual} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="tanggal_transaksi" className="col-sm-2 col-form-label">Tanggal Transaksi</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" name="tanggal_transaksi" id="tanggal_transaksi" onChange={this.handleInputChange} value={this.state.tanggal_transaksi} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="jenis_barang" className="col-sm-2 col-form-label">Jenis Barang</label>
                    <div className="col-sm-10">
                        <input type="teks" className="form-control" name="jenis_barang" id="jenis_barang" onChange={this.handleInputChange} value={this.state.jenis_barang} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        )
    }
}
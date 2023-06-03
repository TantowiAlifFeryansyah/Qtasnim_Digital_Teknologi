import { Component } from "react";

export default class SaleBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sales: [
                { namaBarang: "Kopi", stok: 100, jumlahTerjual: 10, tanggalTransaksi: "1-06-2023", jenisBarang: "Konsumsi" },
                { namaBarang: "Teh", stok: 100, jumlahTerjual: 19, tanggalTransaksi: "2-06-2023", jenisBarang: "Konsumsi" },
                { namaBarang: "Kopi", stok: 90, jumlahTerjual: 15, tanggalTransaksi: "3-06-2023", jenisBarang: "Konsumsi" }
            ],
            namaBarang: null,
            stok: null,
            jumlahTerjual: null,
            tanggalTransaksi: null,
            jenisBarang: null,
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
        this.setState(function (state, props) {
            return {
                sales: [
                    {
                        namaBarang: this.state.namaBarang,
                        stok: this.state.stok,
                        jumlahTerjual: this.state.jumlahTerjual,
                        tanggalTransaksi: this.state.tanggalTransaksi,
                        jenisBarang: this.state.jenisBarang
                    },
                    ...state.sales
                ]
            }
        });
        this.setState({
            namaBarang: '',
            stok: '',
            jumlahTerjual: '',
            tanggalTransaksi: '',
            jenisBarang: '',
        })
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h1>Sales</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row mb-3">
                                <label htmlFor="namaBarang" className="col-sm-2 col-form-label">Nama Barang</label>
                                <div className="col-sm-10">
                                    <input type="teks" className="form-control" name="namaBarang" id="namaBarang" onChange={this.handleInputChange} value={this.state.namaBarang} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="stok" className="col-sm-2 col-form-label">Stok</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" name="stok" id="stok" onChange={this.handleInputChange} value={this.state.stok} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="jumlahTerjual" className="col-sm-2 col-form-label">Jumlah Terjual</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" name='jumlahTerjual' id="jumlahTerjual" onChange={this.handleInputChange} value={this.state.jumlahTerjual} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="tanggalTransaksi" className="col-sm-2 col-form-label">Tanggal Transaksi</label>
                                <div className="col-sm-10">
                                    <input type="date" className="form-control" name="tanggalTransaksi" id="tanggalTransaksi" onChange={this.handleInputChange} value={this.state.tanggalTransaksi} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="jenisBarang" className="col-sm-2 col-form-label">Jenis Barang</label>
                                <div className="col-sm-10">
                                    <input type="teks" className="form-control" name="jenisBarang" id="jenisBarang" onChange={this.handleInputChange} value={this.state.jenisBarang} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Barang</th>
                                <th>Stok</th>
                                <th>Jumlah Terjual</th>
                                <th>Tanggal Transaksi</th>
                                <th>Jenis Barang</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.sales.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.namaBarang}</td>
                                    <td>{item.stok}</td>
                                    <td>{item.jumlahTerjual}</td>
                                    <td>{item.tanggalTransaksi}</td>
                                    <td>{item.jenisBarang}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="card-footer">

                    </div>
                </div>
            </div>
        )
    }
}
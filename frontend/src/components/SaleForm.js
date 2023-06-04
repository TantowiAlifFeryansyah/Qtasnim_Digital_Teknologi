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
        this.props.submit({ nama_barang: this.state.nama_barang, stok: this.state.stok, jumlah_terjual: this.state.jumlah_terjual, tanggal_transaksi: this.state.tanggal_transaksi, jenis_barang: this.state.jenis_barang })
        this.setState({
            nama_barang: '',
            stok: '',
            jumlah_terjual: '',
            tanggal_transaksi: '',
            jenis_barang: '',
        })
    }

    handleSearch = (event) => {
        event.preventDefault()
        this.props.submit({ nama_barang: this.state.nama_barang })
    }

    handleSearchCancel = (event) => {
        event.preventDefault()
        this.props.resetSale()
        this.setState({ nama_barang: '' })
    }

    render() {
        return (
            <form onSubmit={this.props.submitLabel ? this.handleSearch : this.handleSubmit}>
                <div className="row g-1 align-items-center">
                    <div className="row mb-3">
                        <label htmlFor="nama_barang" className="col-sm-2 col-form-label">
                            <strong>Item Name</strong>
                        </label>
                        <div className="col-sm-10">
                            <input type="teks" className="form-control" name="nama_barang" id="nama_barang"
                                value={this.state.nama_barang} onChange={this.handleInputChange}
                            />
                        </div>
                    </div>

                    {this.props.submitLabel !== 'search' &&
                        <div className="row mb-3">
                            <label htmlFor="stok" className="col-sm-2 col-form-label">
                                <strong>Stock</strong>
                            </label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" name="stok" id="stok"
                                    value={this.state.stok} onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                    }

                    {this.props.submitLabel !== 'search' &&

                        <div className="row mb-3">
                            <label htmlFor="jumlah_terjual" className="col-sm-2 col-form-label">
                                <strong>Quantity Sold</strong>
                            </label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" name="jumlah_terjual" id="jumlah_terjual"
                                    value={this.state.jumlah_terjual} onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                    }

                    {this.props.submitLabel !== 'search' &&
                        <div className="row mb-3">
                            <label htmlFor="tanggal_transaksi" className="col-sm-2 col-form-label">
                                <strong>Transaction Date</strong>
                            </label>
                            <div className="col-sm-2">
                                <input type="date" className="form-control" name="tanggal_transaksi" id="tanggal_transaksi"
                                    value={this.state.tanggal_transaksi} onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                    }

                    {this.props.submitLabel !== 'search' &&
                        <div className="row mb-3">
                            <label htmlFor="jenis_barang" className="col-sm-2 col-form-label">
                                <strong>Item Type</strong>
                            </label>
                            <div className="col-sm-10">
                                <input type="teks" className="form-control" name="jenis_barang" id="jenis_barang"
                                    value={this.state.jenis_barang} onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                    }


                    <div className="col-auto">
                        <button type="submit" className="btn btn-success" >
                            {this.props.submitLabel !== "search" &&
                                <i className="fa-regular fa-circle-check"></i>
                            }
                            {this.props.submitLabel === "search" &&
                                <i className="fa-solid fa-magnifying-glass"></i>
                            }
                            &nbsp;
                            {this.props.submitLabel || "save"} </button>
                        &nbsp;
                        {this.props.submitLabel !== "search" &&
                            <button type="submit"
                                onClick={this.props.cancel}
                                className="btn btn-warning"
                                style={{ color: "white" }}>
                                <i className="fa-solid fa-ban"></i>
                                &nbsp;
                                cancel</button>
                        }
                        {this.props.submitLabel === "search" &&
                            <button type="submit"
                                onClick={this.handleSearchCancel}
                                className="btn btn-warning"
                                style={{ color: "white" }}>
                                <i className="fa-solid fa-ban"></i>
                                &nbsp;
                                reset</button>
                        }

                    </div>
                </div>

            </form>
        )
    }
}
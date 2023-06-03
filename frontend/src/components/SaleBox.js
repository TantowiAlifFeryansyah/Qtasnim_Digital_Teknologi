import { Component } from "react";
import SaleForm from "./SaleForm";
import SaleList from "./SaleList";

export default class SaleBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sales: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    sales: data?.data.map(item => {
                        item.sent = true
                        return item
                    })
                })
            })
    }

    addSale = ({ nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang }) => {
        const _id = Date.now()
        this.setState(function (state, props) {
            return {
                sales: [
                    ...state.sales,
                    {
                        _id,
                        nama_barang,
                        stok,
                        jumlah_terjual,
                        tanggal_transaksi,
                        jenis_barang,
                        sent: true
                    },
                ]
            }
        });
        fetch("http://localhost:3000/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState(function (state, props) {
                    return {
                        sales: state.sales.map(item => {
                            if (item._id === _id) {
                                return {
                                    _id: data.data._id,
                                    nama_barang: data.data.nama_barang,
                                    stok: data.data.stok,
                                    jumlah_terjual: data.data.jumlah_terjual,
                                    tanggal_transaksi: data.data.tanggal_transaksi,
                                    jenis_barang: data.data.jenis_barang,
                                    sent: true
                                }
                            }
                            return item
                        })
                    }
                })
            })
            .catch((error) => {
                this.setState(function (state, props) {
                    return {
                        sales: state.sales.map(item => {
                            if (item._id === _id) {
                                return { ...item, sent: false }
                            }
                            return item
                        })
                    }
                })
            })
    }

    updateSale = ({_id, nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang}) => {
        fetch(`http://localhost:3000/update/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState(function (state) {
                    return {
                        sales: state.sales.map(item => {
                            if (item._id === _id) {
                                return {
                                    _id: data.data._id,
                                    nama_barang: data.data.nama_barang,
                                    stok: data.data.stok,
                                    jumlah_terjual: data.data.jumlah_terjual,
                                    tanggal_transaksi: data.data.tanggal_transaksi,
                                    jenis_barang: data.data.jenis_barang,
                                    sent: true
                                }
                            }
                            return item
                        })
                    }
                })
            })
    }

    removeSale = (id) => {
        fetch(`http://localhost:3000/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json()).then((data) => {
            this.setState(function (state, props) {
                return {
                    sales: state.sales.filter(item => item.id !== data.data.id)
                }
            })
        })
    }

    searchSale = (query = {}) => {
        fetch(`http://localhost:3000?${new URLSearchParams({ query })}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    sales: data?.data
                })
            })
    }

    resendSale = ({_id, nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang}) => {
        fetch("http://localhost:3000/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState(function (state, props) {
                    return {
                        sales: state.sales.map(item => {
                            if (item._id === _id) {
                                return {
                                    _id: data.data._id,
                                    nama_barang: data.data.nama_barang,
                                    stok: data.data.stok,
                                    jumlah_terjual: data.data.jumlah_terjual,
                                    tanggal_transaksi: data.data.tanggal_transaksi,
                                    jenis_barang: data.data.jenis_barang,
                                    sent: true
                                }
                            }
                            return item
                        })
                    }
                })
            })
            .catch((error) => {
                console.log('gagal resend');
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
                        <SaleForm submit={this.addSale} />
                    </div>
                    <SaleList 
                    data={this.state.sales} 
                    remove={this.removeSale} 
                    resend={this.resendSale} 
                    update={this.updateSale}/>
                    <div className="card-footer">

                    </div>
                </div>
            </div>
        )
    }
}
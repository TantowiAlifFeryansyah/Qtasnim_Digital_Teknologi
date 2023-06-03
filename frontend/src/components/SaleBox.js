import { Component } from "react";
import SaleForm from "./SaleForm";
import SaleList from "./SaleList";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

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
        const id = Date.now()
        this.setState(function (state, props) {
            return {
                sales: [
                    ...state.sales,
                    {
                        id,
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
                            if (item.id === id) {
                                return {
                                    id: data.data.id,
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
                            if (item.id === id) {
                                return { ...item, sent: false }
                            }
                            return item
                        })
                    }
                })
            })
    }

    updateSale = ({ id, nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang }) => {
        fetch(`http://localhost:3000/update/${id}`, {
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
                            if (item.id === id) {
                                return {
                                    id: data.data.id,
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
                    sales: state.sales.filter(item => item.id !== id)
                }
            })
        })
    }

    // searchSale = (query = {}) => {
    //     fetch(`http://localhost:3000?${new URLSearchParams({ query })}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             this.setState({
    //                 sales: data?.data.map(item => {
    //                     item.sent = true
    //                     return item
    //                 })
    //             })
    //         })
    // }

    resendSale = ({ id, nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang }) => {
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
                            if (item.id === id) {
                                return {
                                    id: data.data.id,
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

    handleAdd = () => {
        this.setState({
            isAdd: true
        });
    }

    handleCancel = () => {
        this.setState({
            isAdd: false
        });
    }

    cancelSearch = () => {
        this.params = {
            nama_barang: '',
            stok: '',
            jumlah_terjual: '',
            tanggal_transaksi: '',
            jenis_barang: '',
        }
        this.componentDidMount()
    }

    search = (query = {}) => {
        this.params = { ...this.params, ...query, page: 1 }
        this.componentDidMount()
    }

    render() {
        return (
            <div className="container-xxl mt-4">
                <div className="card shadow mb-4">
                    <div className="card-header pt-2 pb-1">
                        <center>
                            <h1>Sales</h1>
                        </center>
                    </div>
                    <div className="card-body">




                        {this.state.isAdd ?
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold">Adding Form</h6>
                                </div>


                                <div className="card-body">
                                    <SaleForm
                                        submit={this.addSale}
                                        cancel={this.handleCancel}
                                    />
                                </div>
                            </div>
                            :
                            <div className="mb-4">
                                <button type="submit"
                                    className="btn btn-primary"
                                    onClick={this.handleAdd}>
                                    <i className="fa-solid fa-plus"></i>
                                    &nbsp;
                                    add
                                </button>
                            </div>
                        }

                        <div className="card shadow mb-5">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold">Search Form</h6>
                            </div>
                            <div className="card-body">
                                <SaleForm
                                    // submit={this.searchSale}
                                    submit={this.search}
                                    submitLabel='search'
                                    cancelSearch={this.cancelSearch}
                                />
                            </div>
                        </div>


                        <SaleList
                            data={this.state.sales}
                            remove={this.removeSale}
                            resend={this.resendSale}
                            update={this.updateSale} />


                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faCopyright} />
                            &nbsp;
                            <center>
                                2023 Tantowi Alif Feryansyah
                            </center>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
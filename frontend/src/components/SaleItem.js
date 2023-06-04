import React, { Component, Fragment } from "react"
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faBan, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
        this.props.update({ id: this.props.sale.id, nama_barang: this.state.nama_barang, stok: this.state.stok, jumlah_terjual: this.state.jumlah_terjual, tanggal_transaksi: this.state.tanggal_transaksi, jenis_barang: this.state.jenis_barang })
        this.setState({
            isEdit: false
        });
    }

    handleModalShowHide() {
        this.setState({
            showHide: true
        })
    }

    cancelHandleModalShowHide() {
        this.setState({
            showHide: false
        })
    }

    render() {
        return (
            <Fragment>
                <tr>
                    <td>{this.props.no}</td>
                    <td>
                        {this.state.isEdit ?
                            <input
                                type="teks"
                                name="nama_barang"
                                value={this.state.nama_barang}
                                placeholder="Nama Barang"
                                onChange={this.handleInputChange}
                                className="form-control"
                            />
                            :
                            this.state.nama_barang
                        }
                    </td>

                    <td>
                        {this.state.isEdit ?
                            <input
                                type="teks"
                                name="stok"
                                value={this.state.stok}
                                placeholder="Stok Awal"
                                onChange={this.handleInputChange}
                                className="form-control"
                            />
                            :
                            this.state.stok
                        }
                    </td>

                    <td>
                        {this.state.isEdit ?
                            <input
                                type="teks"
                                name="jumlah_terjual"
                                value={this.state.jumlah_terjual}
                                placeholder="Stok Keluar"
                                onChange={this.handleInputChange}
                                className="form-control"
                            />
                            :
                            this.state.jumlah_terjual
                        }
                    </td>

                    <td>
                        {this.state.isEdit ?
                            <input
                                type="date"
                                name="tanggal_transaksi"
                                value={this.state.tanggal_transaksi}
                                placeholder="Tanggal Transaksi"
                                onChange={this.handleInputChange}
                                className="form-control"
                            />
                            :
                            format(new Date(this.state.tanggal_transaksi), 'MM/dd/yyyy')

                        }
                    </td>

                    <td>
                        {this.state.isEdit ?
                            <input
                                type="teks"
                                name="jenis_barang"
                                value={this.state.jenis_barang}
                                placeholder="Jenis Barang"
                                onChange={this.handleInputChange}
                                className="form-control"
                            />
                            :
                            this.state.jenis_barang
                        }
                    </td>


                    {this.props.sale.sent ?
                        this.state.isEdit ?
                            <td>
                                <button type="button"
                                    className="btn btn-primary"
                                    onClick={this.saveEdit}>
                                    <FontAwesomeIcon icon={faFloppyDisk} />
                                </button>
                                &nbsp;
                                <button type="button"
                                    className="btn btn-warning"
                                    onClick={this.handleCancel}>
                                    <FontAwesomeIcon icon={faBan} />
                                </button>
                            </td>

                            :

                            <td>
                                <button type="button" className="btn btn-success" onClick={this.handleEdit}>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </button>
                                &nbsp;
                                <button type="button" className="btn btn-danger" onClick={() => this.handleModalShowHide()}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        :
                        <td>
                            <button type="button" className="btn btn-warning" onClick={this.props.resend} style={{ color: "white" }}>resend</button>
                        </td>

                    }
                </tr>

                <Modal show={this.state.showHide}>
                    <Modal.Header >
                        <Modal.Title>Deleted Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure, you want delete it</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.cancelHandleModalShowHide()}>
                            No
                        </Button>
                        <Button variant="primary" onClick={this.props.remove}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        )
    }
}
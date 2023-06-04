import { Component } from "react";

export default class FilterSale extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: '',
            temp: ''
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

    componentDidUpdate() {
        if (this.state.filter !== this.state.temp) {
            this.props.filterData(this.state.filter)
            this.setState({
                temp: this.state.filter
            })
        }
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="a_z" name="filter"
                            value="a_z" onChange={this.handleInputChange} />
                        <label className="form-check-label" htmlFor="a_z">
                            <strong>
                                A - Z
                            </strong>
                        </label>
                    </div>
                    &nbsp;
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="z_a" name="filter"
                            value="z_a" onChange={this.handleInputChange} />
                        <label className="form-check-label" htmlFor="z_a">
                            <strong>
                                Z - A
                            </strong>
                        </label>
                    </div>
                </div>
                &nbsp;
                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="tanggal_transaksi_terkini" name="filter" value="tanggal_transaksi_terkini" onChange={this.handleInputChange} />
                        <label className="form-check-label" htmlFor="tanggal_transaksi_terkini">
                            <strong>
                                Earliest Transaction
                            </strong>
                        </label>
                    </div>
                    &nbsp;
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="tanggal_transaksi_terlama" name="filter" value="tanggal_transaksi_terlama" onChange={this.handleInputChange} />
                        <label className="form-check-label" htmlFor="tanggal_transaksi_terlama">
                            <strong>
                                Oldest Transaction
                            </strong>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
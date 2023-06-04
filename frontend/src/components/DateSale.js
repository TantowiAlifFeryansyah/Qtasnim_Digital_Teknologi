import { Component } from "react";

export default class DateSale extends Component {
    constructor(props) {
        super(props);
        this.jalanKan = this.jalanKan.bind(this);
        this.state = {
            filter: "",
            temp: "",
            startDate: "",
            endDate: "",
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
            this.props.filterData(this.state.filter, this.state.startDate, this.state.endDate)
            this.setState({
                temp: this.state.filter
            })
        }
    }

    jalanKan() {
        this.props.filterData(this.state.filter, this.state.startDate, this.state.endDate)
    }

    handleReset = (event) => {
        event.preventDefault();
        this.props.resetSale();
        this.setState({
            filter: "",
            temp: "",
            startDate: "",
            endDate: "",
        })
    }

        render() {
            return (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
                    <div style={{ display: 'flex', alignItems: "baseline" }}>
                        <div>
                            <div className="form-check form-check-inline mb-3">
                                <input className="form-check-input" type="radio" id="jumlah_terjual_terbanyak"
                                    name="filter" value="jumlah_terjual_terbanyak" onChange={this.handleInputChange} />
                                <label className="form-check-label" htmlFor="jumlah_terjual_terbanyak">
                                    <strong>
                                        Highest Selling Price
                                    </strong>
                                </label>
                            </div>
                        </div>

                        <div className="row g-1 align-items-center">
                            <div className="col-auto">
                                <label
                                    htmlFor="startDate"
                                    className="col-form-label">
                                    <strong>Start Date</strong>
                                </label>
                            </div>
                            <div className="col-auto">
                                <input
                                    type="date"
                                    id="startDate"
                                    name="startDate"
                                    className="form-control"
                                    onChange={this.handleInputChange}
                                    disabled={this.state.filter ? false : true}
                                />
                            </div>

                            <div className="col-auto">
                                <label
                                    htmlFor="endDate"
                                    className="col-form-label">
                                    <strong>End Date</strong>
                                </label>
                            </div>
                            <div className="col-auto">
                                <input
                                    type="date"
                                    id="endDate"
                                    name="endDate"
                                    className="form-control"
                                    onChange={this.handleInputChange}
                                    disabled={this.state.filter ? false : true}
                                />
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex" }}>
                        <div>
                            <button type="submit" className="btn btn-info" onClick={this.jalanKan}
                                disabled={!this.state.filter} style={{ color: "white" }}
                            >run</button>
                        </div>
                        &nbsp;
                        <div>
                            <button type="submit" className="btn btn-warning" onClick={this.handleReset}
                                style={{ color: "white" }}
                            >reset</button>
                        </div>
                    </div>
                </div>

            )
        }
    }
import { Component } from "react";

export default class DateSale extends Component {
    render() {
        return (
            <div className="row g-1 align-items-center">
                    <div className="col-auto">
                        <label
                            htmlFor="start_date"
                            className="col-form-label">
                            <strong>Start Date</strong>
                        </label>
                    </div>
                    <div className="col-auto">
                        <input
                            type="date"
                            id="start_date"
                            name="start_date"
                            className="form-control"
                        />
                    </div>

                    <div className="col-auto">
                        <label
                            htmlFor="end_date"
                            className="col-form-label">
                            <strong>End Date</strong>
                        </label>
                    </div>
                    <div className="col-auto">
                        <input
                            type="date"
                            id="end_date"
                            name="end_date"
                            className="form-control"
                        />
                    </div>
                </div>
        )
    }
}
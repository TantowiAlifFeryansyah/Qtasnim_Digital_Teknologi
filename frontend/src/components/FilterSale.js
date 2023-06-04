import { Component } from "react";

export default class FilterSale extends Component {
    render() {
        return (
            <div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="a_z" value="option1" name="a_z" />
                    <label className="form-check-label" htmlFor="a_z">
                        <strong>
                            A - Z
                        </strong>
                    </label>
                </div>
                &nbsp;
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="z_a" value="option2" name="z_a" />
                    <label className="form-check-label" htmlFor="z_a">
                        <strong>
                            Z - A
                        </strong>
                    </label>
                </div>
            </div>
        )
    }
}
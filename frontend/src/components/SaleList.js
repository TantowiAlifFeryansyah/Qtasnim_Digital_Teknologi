import SaleItem from "./SaleItem"

export default function SaleList(props) {
    return (
        <table className="table table-striped">
            <thead className="table-dark">
                <tr>
                    <th style={{ width: '7%' }}>No</th>
                    <th style={{ width: '20%' }}>Item Name</th>
                    <th style={{ width: '8%' }}>Stock</th>
                    <th style={{ width: '13%' }}>Quantity Sold</th>
                    <th style={{ width: '15%' }}>Transaction Date</th>
                    <th style={{ width: '20%' }}>Item Type</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((sale, index) => (
                    <SaleItem
                        key={sale.id}
                        no={+ index + 1}
                        sale={sale}
                        remove={() => props.remove(sale.id)}
                        resend={() => props.resend(sale)}
                        update={props.update} />
                ))}
            </tbody>
        </table>
    )
}
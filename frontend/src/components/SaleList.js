import SaleItem from "./SaleItem"

export default function SaleList(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Item Name</th>
                    <th>Stock</th>
                    <th>Quantity Sold</th>
                    <th>Transaction Date</th>
                    <th>Item Type</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((sale, index) => (
                    <SaleItem
                        key={sale.id}
                        no={index + 1}
                        sale={sale}
                        remove={()=> props.remove(sale.id)}
                        resend={()=> props.resend(sale)}
                        update={props.update}/>
                ))}
            </tbody>
        </table>
    )
}
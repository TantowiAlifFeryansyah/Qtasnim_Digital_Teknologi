import SaleItem from "./SaleItem"

export default function SaleList(props) {
    return (
        <table className="table table-striped">
            <thead className="table-dark" style={{width: 10}}>
                <tr style={{textAlign:'center'}}>
                    <th style={{border: "1px solid black", width: '7%'}}>No</th>
                    <th style={{border: "1px solid black", width: '20%'}}>Item Name</th>
                    <th style={{border: "1px solid black", width: '8%'}}>Stock</th>
                    <th style={{border: "1px solid black", width: '13%'}}>Quantity Sold</th>
                    <th style={{border: "1px solid black", width: '15%'}}>Transaction Date</th>
                    <th style={{border: "1px solid black", width: '20%'}}>Item Type</th>
                    <th style={{border: "1px solid black"}}>Action</th>
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
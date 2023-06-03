import SaleItem from "./SaleItem"

export default function SaleList(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Barang</th>
                    <th>Stok</th>
                    <th>Jumlah Terjual</th>
                    <th>Tanggal Transaksi</th>
                    <th>Jenis Barang</th>
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
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
                        nama_barang={sale.nama_barang}
                        stok={sale.stok}
                        jumlah_terjual={sale.jumlah_terjual}
                        tanggal_transaksi={sale.tanggal_transaksi}
                        jenis_barang={sale.jenis_barang} 
                        remove={()=> props.remove(sale._id)}/>
                ))}
            </tbody>
        </table>
    )
}
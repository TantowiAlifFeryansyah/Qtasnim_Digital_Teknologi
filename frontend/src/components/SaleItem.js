export default function SaleItem(props) {
    return (
        <tr>
            <td>{props.no}</td>
            <td>{props.nama_barang}</td>
            <td>{props.stok}</td>
            <td>{props.jumlah_terjual}</td>
            <td>{props.tanggal_transaksi}</td>
            <td>{props.jenis_barang}</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={props.remove}>Hapus</button>
            </td>
        </tr>
    )
}
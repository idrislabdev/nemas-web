export const formatterNumber = (val:number) => {
    if (!val) return 0;
        return `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(/\.(?=\d{0,2}$)/g, ",");
}

export const formatterNumber2 = (val:string) => {
    if (!val) return 0;
        return `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(/\.(?=\d{0,2}$)/g, ",");
}



export const statusLang = (val:string) => {
    if (val == 'created') {
        return "Dibuat"
    } else if (val == 'checking') {
        return "Diperiksa"
    } else if (val == 'process') {
        return "Proses transfer"
    } else if (val == 'success') {
        return "Transfer berhasil"
    } else if (val == 'return_process') {
        return "Proses pengembalian"
    } else if (val == 'returned') {
        return "Pengembalian berhasil"
    } else if (val == 'all') {
        return "Semua"
    } else if (val == 'canceled') {
        return "Dibatalkan"
    }
}


export const statusTransaksiLang = (val:string) => {
    if (val == 'order_buy') {
        return "Produk Emas Fisik"
    } else if (val == 'order_redeem') {
        return "Tarik Emas"
    } else if (val == 'gold_buy') {
        return "Beli Emas"
    } else if (val == 'gold_sell') {
        return "Jual"
    } else if (val == 'gold_transfer_send') {
        return "Transfer Emas"
    } else if (val == 'gold_transfer_receive') {
        return "Terima Emas"
    } else if (val == 'disburst') {
        return "Tarik Saldo"
    } 
}
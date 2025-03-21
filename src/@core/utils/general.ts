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
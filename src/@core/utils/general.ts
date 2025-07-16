const provinceMap: Record<string, string> = {
  Aceh: 'Aceh',
  Bali: 'Bali',
  'Bangka Belitung Islands': 'Kepulauan Bangka Belitung',
  Banten: 'Banten',
  Bengkulu: 'Bengkulu',
  'Central Java': 'Jawa Tengah',
  'Central Kalimantan': 'Kalimantan Tengah',
  'Central Sulawesi': 'Sulawesi Tengah',
  'East Java': 'Jawa Timur',
  'East Kalimantan': 'Kalimantan Timur',
  'East Nusa Tenggara': 'Nusa Tenggara Timur',
  Gorontalo: 'Gorontalo',
  Jakarta: 'DKI Jakarta',
  Jambi: 'Jambi',
  Lampung: 'Lampung',
  Maluku: 'Maluku',
  'North Kalimantan': 'Kalimantan Utara',
  'North Maluku': 'Maluku Utara',
  'North Sulawesi': 'Sulawesi Utara',
  'North Sumatra': 'Sumatera Utara',
  Papua: 'Papua',
  Riau: 'Riau',
  'Riau Islands': 'Kepulauan Riau',
  'Southeast Sulawesi': 'Sulawesi Tenggara',
  'South Kalimantan': 'Kalimantan Selatan',
  'South Sulawesi': 'Sulawesi Selatan',
  'South Sumatra': 'Sumatera Selatan',
  'West Java': 'Jawa Barat',
  'West Kalimantan': 'Kalimantan Barat',
  'West Nusa Tenggara': 'Nusa Tenggara Barat',
  'West Papua': 'Papua Barat',
  'West Sulawesi': 'Sulawesi Barat',
  'West Sumatra': 'Sumatera Barat',
  Yogyakarta: 'DI Yogyakarta',
};

export const formatterNumber = (val: number) => {
  if (!val) return 0;
  return `${val}`
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    .replace(/\.(?=\d{0,2}$)/g, ',');
};

export const formatterNumber2 = (val: string) => {
  if (!val) return 0;
  return `${val}`
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    .replace(/\.(?=\d{0,2}$)/g, ',');
};

export const statusLang = (val: string) => {
  if (val == 'created') {
    return 'Dibuat';
  } else if (val == 'checking') {
    return 'Diperiksa';
  } else if (val == 'process') {
    return 'Proses transfer';
  } else if (val == 'success') {
    return 'Transfer berhasil';
  } else if (val == 'return_process') {
    return 'Proses pengembalian';
  } else if (val == 'returned') {
    return 'Pengembalian berhasil';
  } else if (val == 'all') {
    return 'Semua';
  } else if (val == 'canceled') {
    return 'Dibatalkan';
  }
};

export const statusTransaksiLang = (val: string) => {
  if (val == 'order_buy') {
    return 'Produk Emas Fisik';
  } else if (val == 'order_redeem') {
    return 'Tarik Emas';
  } else if (val == 'gold_buy') {
    return 'Beli Emas';
  } else if (val == 'gold_sell') {
    return 'Jual';
  } else if (val == 'gold_transfer_send') {
    return 'Transfer Emas';
  } else if (val == 'gold_transfer_receive') {
    return 'Terima Emas';
  } else if (val == 'disburst') {
    return 'Tarik Saldo';
  }
};

export const translateProvince = (stateEn: string) => {
  return provinceMap[stateEn] || stateEn;
};

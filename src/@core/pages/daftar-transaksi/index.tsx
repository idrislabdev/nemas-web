/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { Checkbox, DatePicker, GetProp, Pagination } from 'antd';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import ModalDetailTransaksi from './modal-detail';
import axiosInstance from '@/@core/utils/axios';
import { IHistory, IUserLogin } from '@/@core/@types/interface';
import moment from 'moment';
import 'moment/locale/id';
import { Dayjs } from 'dayjs';
import { Download01 } from '@untitled-ui/icons-react';
const { RangePicker } = DatePicker;
import ExcelJS from 'exceljs';
import { formatterNumber, statusTransaksiLang } from '@/@core/utils/general';

type ExportRow = {
  no: number | string;
  tipe: string;
  tanggal: string;
  ref: string;
  email: string;
  nominal: number | string;
  berat: number | string;
  penerima: string;
  pengirim: string;
  berat_diterima: number | string;
  gold_balance: number | string;
  wallet_balance: number | string;
};

const DaftarTransaksiPageWrapper = (props: { userLogin: IUserLogin }) => {
  const { userLogin } = props;
  moment.locale('id');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkeds, setCheckeds] = useState<unknown[]>(['order_buy']);
  const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (
    checkedValues
  ) => {
    setCheckeds(checkedValues);
  };
  const [filterDate, setFilterDate] = useState('');
  const [histories, setHistories] = useState<IHistory[]>([] as IHistory[]);
  const [selected, setSelected] = useState<IHistory>({} as IHistory);
  const [total, setTotal] = useState(0);
  const [params, setParams] = useState({
    format: 'json',
    offset: 0,
    limit: 5,
    search: '',
  });
  const options = [
    { label: 'Produk Emas Fisik', value: 'order_buy' },
    { label: 'Tarik Emas', value: 'order_redeem' },
    { label: 'Beli Emas', value: 'gold_buy' },
    { label: 'Jual', value: 'gold_sell' },
    { label: 'Transfer Emas', value: 'gold_transfer_send' },
    { label: 'Terima Emas', value: 'gold_transfer_receive' },
    { label: 'Tarik Saldo', value: 'disburst' },
    { label: 'Deposito', value: 'deposito' },
    { label: 'Gadai', value: 'loan' },
    { label: 'Bayar Gadai', value: 'loan_pay' },
    { label: 'Topup', value: 'topup' },
  ];

  const fetchData = useCallback(async () => {
    let filterString = '';
    checkeds.forEach((item) => {
      filterString = filterString + `&transaction_type=${item}`;
    });
    const resp = await axiosInstance.get(
      `/reports/gold-transactions/?user_id=${userLogin.id}&fetch=${params.limit}&offset=${params.offset}${filterString}${filterDate}`
    );
    setTotal(resp.data.count);
    setHistories(resp.data.results);
  }, [params, checkeds, filterDate, userLogin]);

  const onChangePage = async (val: number) => {
    setParams({ ...params, offset: (val - 1) * params.limit });
  };

  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    const tempFilter = `&start_date=${dateStrings[0]}&end_date=${dateStrings[1]}`;
    setFilterDate(tempFilter);
  };

  const showDetail = (item: IHistory) => {
    setSelected(item);
    setIsModalOpen(true);
  };

  // =======================
  // FETCH ALL DATA
  // =======================
  const fetchAllData = async (filterString: string) => {
    let all: IHistory[] = [];
    const limit = 200;

    const url = `/reports/gold-transactions/?user_id=${userLogin.id}${filterString}`;

    const first = await axiosInstance.get(url, {
      params: { fetch: limit, offset: 0 },
    });

    all = all.concat(first.data.results);
    const totalCount = first.data.count;
    const pages = Math.ceil(totalCount / limit);

    for (let i = 1; i < pages; i++) {
      const resp = await axiosInstance.get(url, {
        params: { fetch: limit, offset: i * limit },
      });

      all = all.concat(resp.data.results);

      // sedikit delay agar request tidak diblok API
      await new Promise((r) => setTimeout(r, 150));
    }

    return all;
  };

  // =======================
  // EXPORT DATA
  // =======================
  const exportData = async () => {
    // siapkan filter
    let filterString = '';
    checkeds.forEach((item) => {
      filterString += `&transaction_type=${item}`;
    });
    filterString += filterDate;

    // ambil semua data
    const rows = await fetchAllData(filterString);

    // =======================
    // MAP DATA
    // =======================
    const mapped: ExportRow[] | any =
      rows.length > 0
        ? rows.map((item, index) => ({
            no: index + 1,
            tipe: statusTransaksiLang(item.transaction_type),
            tanggal: moment(item.transaction_date).format('DD MMMM YYYY'),
            ref: item.ref_number,
            email: item.email,
            nominal: parseInt(item.price),
            berat: parseFloat(item.weight),
            penerima: item.user_to,
            pengirim: item.user_from,
            berat_diterima: item.transfered_weight
              ? parseFloat(item.transfered_weight)
              : 0,
            gold_balance: item.gold_balance || '',
            wallet_balance: item.wallet_balance || '',
          }))
        : [
            {
              no: '',
              tipe: '',
              tanggal: '',
              ref: '',
              email: '',
              nominal: '',
              berat: '',
              penerima: '',
              pengirim: '',
              berat_diterima: '',
              gold_balance: '',
              wallet_balance: '',
            },
          ];

    // =======================
    // HITUNG TOTAL
    // =======================
    const totalNominal = rows.reduce((a, b) => a + Number(b.price || 0), 0);
    const totalBerat = rows.reduce((a, b) => a + Number(b.weight || 0), 0);
    const totalBeratDiterima = rows.reduce(
      (a, b) => a + Number(b.transfered_weight || 0),
      0
    );

    if (rows.length > 0) {
      mapped.push({
        no: '',
        tipe: 'TOTAL',
        tanggal: '',
        ref: '',
        email: '',
        nominal: totalNominal,
        berat: totalBerat,
        penerima: '',
        pengirim: '',
        berat_diterima: totalBeratDiterima,
        gold_balance: '',
        wallet_balance: '',
      });
    }

    // =======================
    // BUAT FILE EXCEL
    // =======================
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('History Transaksi');

    worksheet.columns = [
      { header: 'No', key: 'no', width: 5 },
      { header: 'Tipe Transaksi', key: 'tipe', width: 20 },
      { header: 'Tanggal Transaksi', key: 'tanggal', width: 20 },
      { header: 'No. Referensi', key: 'ref', width: 20 },
      { header: 'Email', key: 'email', width: 25 },
      { header: 'Nominal Transaksi', key: 'nominal', width: 20 },
      { header: 'Berat Emas', key: 'berat', width: 15 },
      { header: 'Penerima', key: 'penerima', width: 20 },
      { header: 'Pengirim', key: 'pengirim', width: 20 },
      { header: 'Berat Emas (Diterima)', key: 'berat_diterima', width: 20 },
      { header: 'Saldo Emas', key: 'gold_balance', width: 20 },
      { header: 'Saldo Wallet', key: 'wallet_balance', width: 20 },
    ];

    worksheet.getRow(1).font = { bold: true };

    // =======================
    // INSERT ROWS
    // =======================
    mapped.forEach((item: any) => {
      worksheet.addRow({
        ...item,
        nominal:
          item.nominal !== '' && !isNaN(Number(item.nominal))
            ? `Rp${formatterNumber(Number(item.nominal))}`
            : '',
        berat:
          item.berat !== '' && !isNaN(Number(item.berat))
            ? `${item.berat} Gram`
            : '',
        berat_diterima:
          item.berat_diterima !== '' && !isNaN(Number(item.berat_diterima))
            ? `${item.berat_diterima} Gram`
            : '',
      });
    });

    // =======================
    // BORDER + ALIGNMENT
    // =======================
    worksheet.eachRow((row) => {
      row.eachCell((cell, colNumber) => {
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };

        // angka rata kanan
        if (
          ['nominal', 'berat', 'berat_diterima'].includes(
            worksheet.getColumn(colNumber).key!
          )
        ) {
          cell.alignment = { horizontal: 'right' };
        }
      });
    });

    // =======================
    // TOTAL ROW STYLE
    // =======================
    if (rows.length > 0) {
      const lastRow = worksheet.lastRow!;
      lastRow.font = { bold: true };

      lastRow.eachCell((cell) => {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFF0F0F0' },
        };
      });
    }

    // =======================
    // GENERATE FILE
    // =======================
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `history_transaksi_${moment().format(
      'YYYYMMDD_HHmmss'
    )}.xlsx`;
    link.click();
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <main className="daftar-transaksi-page sm:mobile-responsive md:mobile-responsive">
        <div className="header-section">
          <h2>Transaksi</h2>
        </div>
        <div className="main-section">
          <div className="main-container">
            <div className="main-area">
              <div className="input-list">
                {/* <Input 
                                    suffix={<span className='text-neutral-400'><SearchSm /></span>} 
                                    className='input-base'
                                /> */}
                {/* <DatePicker  /> */}
                <RangePicker
                  size={'small'}
                  className="w-[300px] h-[38px]"
                  onChange={onRangeChange}
                />
                <button
                  className="bg-primary text-white flex items-center justify-center gap-[4px] h-[38px] rounded-[4px] w-[200px] text-base"
                  onClick={() => exportData()}
                >
                  <Download01 /> Download Excel
                </button>
              </div>
              <div className="cards-list">
                {histories.map((item, index: number) => (
                  <div className="card" key={index}>
                    <div className="info-area">
                      <div className="info-img">
                        <Image
                          src={`/images/nemas-2.png`}
                          alt="image1"
                          width={0}
                          height={0}
                          sizes="100%"
                        />
                      </div>
                      <div className="info-detail">
                        <label>{parseFloat(item.weight)} Gram</label>
                        <span>
                          {statusTransaksiLang(item.transaction_type)}
                        </span>
                      </div>
                    </div>
                    <div className="detail-area">
                      <label>
                        {moment(item.transaction_date).format('DD MMM YYYY')}
                      </label>
                      <a onClick={() => showDetail(item)}>
                        Lihat Detail Transaksi
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination">
                <Pagination
                  onChange={onChangePage}
                  pageSize={params.limit}
                  total={total}
                  showSizeChanger={false}
                />
              </div>
            </div>
            <div className="filter-area">
              <h5>Filter</h5>
              <Checkbox.Group
                options={options}
                value={checkeds}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </main>
      <ModalDetailTransaksi
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        detail={selected}
      />
    </>
  );
};

export default DaftarTransaksiPageWrapper;

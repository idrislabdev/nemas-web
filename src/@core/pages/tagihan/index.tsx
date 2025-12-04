/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { DatePicker, Pagination } from 'antd';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import axiosInstance from '@/@core/utils/axios';
import { IMonthlyCost, IUserLogin } from '@/@core/@types/interface';
import moment from 'moment';
import 'moment/locale/id';
import { Dayjs } from 'dayjs';
import { Download01 } from '@untitled-ui/icons-react';
const { RangePicker } = DatePicker;
import ExcelJS from 'exceljs';
import { formatterNumber } from '@/@core/utils/general';
import ModalDetailTagihan from './modal-detail';

// ============================
// EXPORT ROW BARU
// ============================
type ExportRow = {
  no: number | string;
  tanggal: string;
  order_number: string;
  monthly_cost: number | string;
  discount: number | string;
  total_cost: number | string;
  gold_weight: number | string;
  level: number | string;
  status: string;
};

const DaftarTagihanPageWrapper = (props: { userLogin: IUserLogin }) => {
  const { userLogin } = props;
  moment.locale('id');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterDate, setFilterDate] = useState('');
  const [histories, setHistories] = useState<IMonthlyCost[]>([]);
  const [selected, setSelected] = useState<IMonthlyCost>({} as IMonthlyCost);
  const [total, setTotal] = useState(0);

  const [params, setParams] = useState({
    offset: 0,
    limit: 5,
  });

  // ===============================
  // FETCH PAGING DATA
  // ===============================
  const fetchData = useCallback(async () => {
    const resp = await axiosInstance.get(
      `/gold-transaction/gold-monthly/?limit=${params.limit}&offset=${params.offset}${filterDate}`
    );

    setTotal(resp.data.count);
    setHistories(resp.data.results);
  }, [params, filterDate]);

  const onChangePage = async (val: number) => {
    setParams({ ...params, offset: (val - 1) * params.limit });
  };

  // ===============================
  // FILTER DATE
  // ===============================
  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    if (!dates || !dateStrings[0] || !dateStrings[1]) {
      setFilterDate('');
      return;
    }

    const tempFilter =
      `&monthly_cost_issue_date__gte=${dateStrings[0]}` +
      `&monthly_cost_issue_date__lte=${dateStrings[1]}`;

    setFilterDate(tempFilter);
  };

  const showDetail = (item: IMonthlyCost) => {
    setSelected(item);
    setIsModalOpen(true);
  };

  // ===============================
  // FETCH ALL FOR EXPORT
  // ===============================
  const fetchAllData = async (filterString: string) => {
    let all: IMonthlyCost[] = [];
    const limit = 200;

    const url = `/gold-transaction/gold-monthly/?user_id=${userLogin.id}${filterString}`;

    const first = await axiosInstance.get(url, {
      params: { limit, offset: 0 },
    });

    all = all.concat(first.data.results);

    const totalCount = first.data.count;
    const pages = Math.ceil(totalCount / limit);

    for (let i = 1; i < pages; i++) {
      const resp = await axiosInstance.get(url, {
        params: { limit, offset: i * limit },
      });

      all = all.concat(resp.data.results);
      await new Promise((r) => setTimeout(r, 150));
    }

    return all;
  };

  // ===============================
  // EXPORT EXCEL
  // ===============================
  const exportData = async () => {
    const rows = await fetchAllData(filterDate);

    const mapped: ExportRow[] =
      rows.length > 0
        ? rows.map((item, index) => ({
            no: index + 1,
            tanggal: moment(item.monthly_cost_issue_date).format(
              'DD MMMM YYYY'
            ),
            order_number: item.order_number,
            monthly_cost: item.monthly_cost,
            discount: item.discount,
            total_cost: item.total_cost,
            gold_weight: item.gold_weight,
            level: item.level,
            status: item.is_paid ? 'LUNAS' : 'BELUM BAYAR',
          }))
        : [
            {
              no: '',
              tanggal: '',
              order_number: '',
              monthly_cost: '',
              discount: '',
              total_cost: '',
              gold_weight: '',
              level: '',
              status: '',
            },
          ];

    // CREATE WORKBOOK
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Daftar Tagihan');

    worksheet.columns = [
      { header: 'No', key: 'no', width: 5 },
      { header: 'Tanggal Tagihan', key: 'tanggal', width: 20 },
      { header: 'Order Number', key: 'order_number', width: 20 },
      { header: 'Biaya Bulanan', key: 'monthly_cost', width: 20 },
      { header: 'Diskon', key: 'discount', width: 20 },
      { header: 'Total Tagihan', key: 'total_cost', width: 20 },
      { header: 'Berat Emas', key: 'gold_weight', width: 15 },
      { header: 'Level', key: 'level', width: 10 },
      { header: 'Status Pembayaran', key: 'status', width: 20 },
    ];

    worksheet.getRow(1).font = { bold: true };

    mapped.forEach((item) => {
      worksheet.addRow({
        ...item,
        monthly_cost:
          item.monthly_cost !== ''
            ? `Rp${formatterNumber(Number(item.monthly_cost))}`
            : '',
        discount:
          item.discount !== ''
            ? `Rp${formatterNumber(Number(item.discount))}`
            : '',
        total_cost:
          item.total_cost !== ''
            ? `Rp${formatterNumber(Number(item.total_cost))}`
            : '',
        gold_weight: item.gold_weight !== '' ? `${item.gold_weight} Gram` : '',
      });
    });

    // BORDER
    worksheet.eachRow((row) => {
      row.eachCell((cell) => {
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `daftar_tagihan_${moment().format('YYYYMMDD_HHmmss')}.xlsx`;
    link.click();
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <main className="daftar-transaksi-page sm:mobile-responsive md:mobile-responsive">
        <div className="header-section">
          <h2>Daftar Tagihan</h2>
        </div>

        <div className="main-section">
          <div className="main-container">
            <div className="main-area">
              <div className="input-list">
                <RangePicker
                  size={'small'}
                  className="w-[300px] h-[38px]"
                  onChange={onRangeChange}
                />

                <button
                  className="bg-primary text-white flex items-center justify-center gap-[4px] h-[38px] rounded-[4px] w-[200px] text-base"
                  onClick={exportData}
                >
                  <Download01 /> Download Excel
                </button>
              </div>

              <div className="cards-list">
                {histories.map((item, index) => (
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
                        <label>{item.gold_weight} Gram</label>
                        <span>Order #{item.order_number}</span>
                      </div>
                    </div>

                    <div className="detail-area">
                      <label>
                        {moment(item.monthly_cost_issue_date).format(
                          'DD MMM YYYY'
                        )}
                      </label>
                      <a onClick={() => showDetail(item)}>
                        Lihat Detail Tagihan
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
          </div>
        </div>
      </main>

      <ModalDetailTagihan
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        detail={selected}
      />
    </>
  );
};

export default DaftarTagihanPageWrapper;

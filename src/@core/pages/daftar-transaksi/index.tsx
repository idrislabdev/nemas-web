"use client"

import { Checkbox, DatePicker, GetProp, Pagination } from 'antd'
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react'
import ModalDetailTransaksi from './modal-detail';
import axiosInstance from '@/@core/utils/axios';
import { useGlobals } from '@/@core/hoc/useGlobals';
import { IHistory, IUserLogin } from '@/@core/@types/interface';
import moment from 'moment';
import 'moment/locale/id';
import { Dayjs } from 'dayjs'
const { RangePicker } = DatePicker;

const DaftarTransaksiPageWrapper = (props: {userLogin:IUserLogin}) => {
    const { userLogin } = props
    moment.locale('id');
    const { globals } = useGlobals()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [checkeds, setCheckeds] = useState<unknown[]>(['order_buy']);
    const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
        setCheckeds(checkedValues)
    };
    const [filterDate, setFilterDate] = useState("");
    const [histories, setHistories] = useState<IHistory[]>([] as IHistory[])
    const [selected, setSelected] = useState<IHistory>({} as IHistory)
    const [ total, setTotal] = useState(0);
    const [params, setParams] = useState({
        format: 'json',
        offset: 0,
        limit: 5,
        search:"",
    });
    const options = [
        { label: 'Produk Emas Fisik', value: 'order_buy' },
        { label: 'Tarik Emas', value: 'order_redeem'},
        { label: 'Beli Emas', value: 'gold_buy' },
        { label: 'Jual', value: 'gold_sell' },
        { label: 'Transfer Emas', value: 'gold_transfer' },
        { label: 'Tarik Saldo', value: 'disburst' },
    ];

    const fetchData = useCallback(async () => {
        let filterString = "";
        checkeds.forEach(item  => {
            filterString = filterString + `&transaction_type=${item}`;
        });
        const resp =  await axiosInstance.get(`/reports/gold-transactions/?user_id=${userLogin.id}&fetch=${params.limit}&offset=${params.offset}${filterString}${filterDate}`)
        setTotal(resp.data.count)
        setHistories(resp.data.results)
    }, [params, checkeds, filterDate, userLogin])

    const onChangePage = async (val:number) => {
        setParams({...params, offset:(val-1)*params.limit})
    }

    const onRangeChange = (dates: null | (Dayjs | null)[], dateStrings: string[]) => {
        const tempFilter = `&start_date=${dateStrings[0]}&end_date=${dateStrings[1]}`
        setFilterDate(tempFilter)
    };

    const showDetail = (item:IHistory) => {
        setSelected(item)
        setIsModalOpen(true)
    }

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <>
            <main className='daftar-transaksi-page sm:mobile-responsive md:mobile-responsive'>
                <div className='header-section'>
                    <h2>Transaksi</h2>
                </div>
                <div className='main-section'>
                    <div className='main-container'>
                        <div className='main-area'>
                            <h5>Daftar Transaksi</h5>
                            <div className='input-list'>
                                {/* <Input 
                                    suffix={<span className='text-neutral-400'><SearchSm /></span>} 
                                    className='input-base'
                                /> */}
                                {/* <DatePicker  /> */}
                                <RangePicker size={'small'} className="w-[300px] h-[38px]" onChange={onRangeChange}/>
                            </div>
                            <div className='cards-list'>
                                {histories.map((item, index:number) => (
                                    <div className='card' key={index}>
                                        <div className='info-area'>
                                            <div className='info-img'>
                                                <Image src={`/images/nemas-2.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                                            </div>                                    
                                            <div className='info-detail'>
                                                <label>{parseFloat(item.weight)} Gram</label>
                                                <span>{item.transaction_type}</span>
                                            </div>
                                        </div>
                                        <div className='detail-area'>
                                            <label>{moment(item.transaction_date).format("DD MMM YYYY")}</label>
                                            <a onClick={() => showDetail(item)}>Lihat Detail Transaksi</a>
                                        </div>
                                    </div>
                                ))}
                               
                            </div>
                            <div className='pagination'>
                                <Pagination 
                                    onChange={onChangePage} 
                                    pageSize={params.limit}  
                                    total={total} 
                                    showSizeChanger={false}
                                />
                            </div>
                        </div>
                        <div className='filter-area'>
                            <h5>Filter</h5>
                            <Checkbox.Group options={options} value={checkeds} onChange={onChange} />
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
  )
}

export default DaftarTransaksiPageWrapper
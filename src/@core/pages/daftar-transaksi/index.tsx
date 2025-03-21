import { SearchSm } from '@untitled-ui/icons-react';
import { Checkbox, DatePicker, GetProp, Input, Pagination } from 'antd'
import Image from 'next/image';
import React from 'react'

const DaftarTransaksiPageWrapper = () => {
    const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };
    const options = [
        { label: 'Tabungan Emas', value: 'Tabungan Emas' },
        { label: 'Beli Emas', value: 'Beli Emas' },
        { label: 'Investasi', value: 'Investasi' },
        { label: 'Jual Emas', value: 'Jual Emas' },
        { label: 'Produk Emas Fisik', value: 'Produk Emas Fisik' },
        { label: 'Tarik Emas', value: 'Tarik Emas' },
        { label: 'Jaminan Emas', value: 'Jaminan Emas' },
        { label: 'Kirim Emas Ke Member', value: 'Kirim Emas Ke Member' },
        { label: 'Tarik Saldo', value: 'Tarik Saldo' },
        { label: 'Top Up Saldo', value: 'Top Up Saldo' },
    ];

    return (
        <main className='daftar-transaksi-page sm:mobile-responsive md:mobile-responsive'>
            <div className='header-section'>
                <h2>Transaksi</h2>
            </div>
            <div className='main-section'>
                <div className='main-container'>
                    <div className='main-area'>
                        <h5>Daftar Transaksi</h5>
                        <div className='input-list'>
                            <Input suffix={<span className='text-neutral-400'><SearchSm /></span>} />
                            <DatePicker  />
                        </div>
                        <div className='cards-list'>
                            <div className='card'>
                                <div className='info-area'>
                                    <div className='info-img'>
                                        <Image src={`/images/nemas-2.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                                    </div>                                    
                                    <div className='info-detail'>
                                        <label>0,044 Gram</label>
                                        <span>Beli Emas</span>
                                    </div>
                                </div>
                                <div className='detail-area'>
                                    <label>26 Okt 2024</label>
                                    <a>Lihat Detail Transaksi</a>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='info-area'>
                                    <div className='info-img'>
                                        <Image src={`/images/nemas-2.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                                    </div>                                    
                                    <div className='info-detail'>
                                        <label>0,044 Gram</label>
                                        <span>Beli Emas</span>
                                    </div>
                                </div>
                                <div className='detail-area'>
                                    <label>26 Okt 2024</label>
                                    <a>Lihat Detail Transaksi</a>
                                </div>
                            </div>
                        </div>
                        <div className='pagination'>
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </div>
                    <div className='filter-area'>
                        <h5>Filter</h5>
                        <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
                    </div>
                </div>
            </div>
        </main>
  )
}

export default DaftarTransaksiPageWrapper
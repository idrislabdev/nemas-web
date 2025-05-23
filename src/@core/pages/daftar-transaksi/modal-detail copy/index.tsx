import { Modal } from 'antd'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'

const ModalDetailTransaksi =(props: {
        isModalOpen:boolean, 
        setIsModalOpen:Dispatch<SetStateAction<boolean>>, 
    }) => {
    const { isModalOpen, setIsModalOpen } = props

    return (
        <Modal className='modal-detail-transaksi' open={isModalOpen} onCancel={() => setIsModalOpen(false)}  footer={null}>
            <h5>Detail Transaksi</h5>
            <div className='header-transaksi'>
                <div className='left-header'>
                    <label>REG3456789065</label>
                    <p>Rp 500.000</p>
                    <span>0,044 Gram</span>
                </div>
                <div className='right-header'>
                    <label>Beli Emas</label>
                    <p>26 Oct 2024</p>
                </div>
            </div>
            <div className='info-transaksi'>
               <div className='card-info'>
                <label>Tabungan Emas Saat Ini</label>
                    <div className='detail-card'>
                        <p>50.0 Gram</p>
                        <span>Detail Asset</span>
                    </div>
               </div>
            </div>
            <div className='history-transaksi'>
                <div className='header-history'>
                    <label>Histori</label>
                    <a>Lihat Semua</a>
                </div>
                <div className='content-history'>
                    <Image 
                        src={`/images/no-data.png`} 
                        alt='no-data' 
                        width={0} 
                        height={0} 
                        sizes='100%' 
                    />
                    <span>Tidak ada Data</span>
                </div>
            </div>
        </Modal>
    )
    }

export default ModalDetailTransaksi
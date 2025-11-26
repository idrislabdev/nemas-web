import { IHistory } from '@/@core/@types/interface'
import { Modal } from 'antd'
import moment from 'moment'
import React, { Dispatch, SetStateAction } from 'react'
import 'moment/locale/id';
import { formatterNumber, statusTransaksiLang } from '@/@core/utils/general';
moment.locale('id');    

const ModalDetailTransaksi =(props: {
        isModalOpen:boolean, 
        setIsModalOpen:Dispatch<SetStateAction<boolean>>, 
        detail:IHistory
    }) => {
    const { isModalOpen, setIsModalOpen, detail } = props
    return (
        <Modal className='modal-detail-transaksi' open={isModalOpen} onCancel={() => setIsModalOpen(false)}  footer={null}>
            <h5>Detail Transaksi</h5>
            <div className='header-transaksi'>
                <div className='left-header'>
                    <label>{detail.ref_number}</label>
                    <p>Rp {formatterNumber(parseInt(detail.price))}</p>
                    <span>{parseFloat(detail.weight)} Gram</span>
                </div>
                <div className='right-header'>
                    <label>{statusTransaksiLang(detail.transaction_type)}</label>
                    <p>{moment(detail.transaction_date).format("DD MMM YYYY")}</p>
                </div>
            </div>
            {/* <div className='info-transaksi'>
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
            </div> */}
        </Modal>
    )
    }

export default ModalDetailTransaksi
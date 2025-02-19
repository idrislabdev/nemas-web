import { InfoCircle, X } from '@untitled-ui/icons-react'
import { Modal } from 'antd'
import React, { Dispatch, SetStateAction } from 'react'

const ModalShipment =(props: {
        isModalOpen:boolean, 
        setIsModalOpen:Dispatch<SetStateAction<boolean>>, 
    }) => {
    const { isModalOpen, setIsModalOpen } = props

    const onConfirm = () => {
        setIsModalOpen(false)
    }

    return (
        <Modal className='modal-shipment' open={isModalOpen} onCancel={() => setIsModalOpen(false)}  footer={null} closeIcon={false}>
            <div className='content-header'>
                <h5>Pilih Jasa Ekspedisi</h5>
                <a className='text-black' onClick={() => setIsModalOpen(false)}><X /></a>
            </div>
            <div className='content-body'>
                <div className='card-notice'>
                    <InfoCircle />
                    <label>
                        Jasa ekspedisi yang direkomendasikan untuk pembelian emas 
                        batangan dibawah Rp 75.000.000 adalah <span>JNT</span>
                    </label>
                </div>
                <div className='card-shipment'>
                    <div className='title'>
                        <label>SAP</label>
                        <p>Rp 116.000</p>
                    </div>
                    <span>Estimasi 2 - 3 Hari</span>
                </div>
                <div className='card-shipment'>
                    <div className='title'>
                        <label>J&amp;T</label>
                        <p>Rp 116.000</p>
                    </div>
                    <span>Estimasi 2 - 3 Hari</span>
                </div>
            </div>
            <div className='content-footer'>
                <button onClick={() => onConfirm()}>Pilih Ekspedisi</button>
            </div>
        </Modal>
    )
    }

export default ModalShipment
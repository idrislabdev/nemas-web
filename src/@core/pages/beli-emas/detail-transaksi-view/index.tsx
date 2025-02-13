import {  ChevronLeft, ChevronRight } from '@untitled-ui/icons-react'
import { Checkbox } from 'antd'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react'
import ModalVoucher from '../modal-voucher'
import { IVoucher } from '@/@core/@types/interface'
// import ModalPayment from '../modal-payment'
import ModalPin from '../modal-pin'

const BeliEmasDetailTransaksiView = (props: {setView:Dispatch<SetStateAction<string>>}) => {
    const { setView } = props
    const [ isModalVoucherOpen, setIsModalVoucherOpen] = useState(false)
    // const [ isModalPayment, setIsModalPayment] = useState(false)
    const [ voucher, setVoucher ] = useState<IVoucher>({} as IVoucher)
    // const [ payment, setPayment ] = useState<IPayment>({} as IPayment)
    const [ isModalPinOpen, setIsModalPinOpen] = useState(false)


    // const setVoucher = () => {
    //     setIsModalVoucherOpen(false)
    // }
    return (
        <>
            <div className='detail-transaksi-section'>
                <div className='header-container'>
                    <h2>Beli Emas</h2>
                </div>
                <div className='main-container'>
                    <div className='header-area'>
                        <h5>Detail Transaksi</h5>
                        <a><span className='my-icon icon-sm'><ChevronLeft /></span><span className='text'>Kembali</span></a>
                    </div>
                    <div className='body-area'>
                        <div className='detail'>
                            <div className='sub-detail header'>
                                <label>Harga Emas</label>
                                <p>Rp 1.349.500</p>
                            </div>
                            <div className='sub-detail'>
                                <label>Jumlah Beli</label>
                                <p>12 Gram</p>
                            </div>
                            <div className='sub-detail total'>
                                <label>Total</label>
                                <p>Rp 16.194.000</p>
                            </div>
                        </div>
                        <div className={`button-voucher-payment`}>
                            <button onClick={() => setIsModalVoucherOpen(true)}>
                                <span className='label-info'>
                                    <Image src={`/images/voucher.png`} alt='voucher' width={0} height={0} sizes='100%' />
                                    {!voucher.code && 'Pilih Promo/Voucher'}
                                    {voucher.code && `Diskon ${voucher.name}` }
                                </span>
                                <span className='my-icon'><ChevronRight /></span>
                            </button>
                        </div>
                        <hr />
                        <div className='confirmation-area'>
                            <Checkbox >Dengan ini saya menyetujui Syarat dan Ketentuan yang berlaku</Checkbox>
                            <button className='confirmation-button' onClick={() => setIsModalPinOpen(true)}>Proses Pembayaran</button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVoucher 
                isModalOpen={isModalVoucherOpen} 
                setIsModalOpen={setIsModalVoucherOpen} 
                setVoucher={setVoucher}
            />
            {/* <ModalPayment 
                isModalOpen={isModalPayment} 
                setIsModalOpen={setIsModalPayment} 
                setPayment={setPayment}
            /> */}
            <ModalPin isModalOpen={isModalPinOpen} setIsModalOpen={setIsModalPinOpen} setView={setView}/>

        </>
    )
}

export default BeliEmasDetailTransaksiView
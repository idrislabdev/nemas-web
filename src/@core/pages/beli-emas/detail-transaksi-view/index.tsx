import { ChevronDown, ChevronLeft, ChevronRight } from '@untitled-ui/icons-react'
import { Checkbox } from 'antd'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
// import ModalVoucher from '../modal-voucher'

const BeliEmasDetailTransaksiView = (props: {setView:Dispatch<SetStateAction<string>>}) => {
    const { setView } = props


    const setShowVoucher = () => {
        setView('')
        // setIsModalVoucherOpen(true)
    }
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
                            <button onClick={() => setShowVoucher()}>
                                <span className='label-info'>
                                    <Image src={`/images/payment.png`} alt='payment' width={0} height={0} sizes='100%' />
                                    Pilih Promo/Voucher
                                </span>
                                <span className='my-icon'><ChevronRight /></span>
                            </button>
                            <button onClick={() => setShowVoucher()}>
                                <span className='label-info'>
                                    <Image src={`/images/payment.png`} alt='payment' width={0} height={0} sizes='100%' />
                                    Pilih Metode Pembayaran
                                </span>
                                <span className='my-icon'><ChevronDown /></span>
                            </button>
                        </div>
                        <hr />
                        <div className='confirmation-area'>
                            <Checkbox >Dengan ini saya menyetujui Syarat dan Ketentuan yang berlaku</Checkbox>
                            {/* <button className='confirmation-button' onClick={() => setIsModalPinOpen(true)}>Proses Pembayaran</button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <ModalVoucher 
                isModalOpen={isModalVoucherOpen} 
                setIsModalOpen={setIsModalVoucherOpen} 
                setVoucher={setVoucher}
            /> */}
        </>
    )
}

export default BeliEmasDetailTransaksiView
import {  ChevronLeft, ChevronRight } from '@untitled-ui/icons-react'
import { Checkbox } from 'antd'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IOrder, IPayment } from '@/@core/@types/interface'
import KeranjangModalPin from '../modal-pin'
import KeranjangModalPayment from '../modal-payment'
import { formatterNumber } from '@/@core/utils/general'
import axiosInstance from '@/@core/utils/axios'
import { AxiosError } from 'axios'

const KeranjangPaymentDetailTransaksiView = (props: {
    setView:Dispatch<SetStateAction<string>>
    setOrder:Dispatch<SetStateAction<IOrder>>
    order: IOrder,
}) => {
    const { setView, setOrder, order } = props
    const [ isModalPayment, setIsModalPayment] = useState(false)
    const [ payment, setPayment ] = useState<IPayment>({} as IPayment)
    const [ isModalPinOpen, setIsModalPinOpen] = useState(false)

    const processPayment = async () => {
        axiosInstance.post("/order/order/create", order)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            const err = error as AxiosError
            if (err.response && err.response.data && err.response.data) {
                const errData = err.response.data
                const jsonError = JSON.parse(JSON.stringify(errData))
                console.log(jsonError)
            }
            
        });
    }

    useEffect(() => {
        if (payment.name) {
            setOrder({...order, 
                order_payment_method : payment.type,
                order_payment_va_bank: payment.name,
            })
        }
    }, [payment])

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
                                <p>Rp{formatterNumber(parseInt(order.order_amount))}</p>
                            </div>
                            <div className='sub-detail'>
                                <label>Jumlah Beli</label>
                                <p>{order.order_item_weight} Gram</p>
                            </div>
                            <div className='sub-detail header'>
                                <label>Biaya Asuransi</label>
                                <p>Rp{formatterNumber(parseInt(order.order_tracking_insurance))}</p>
                            </div>
                            <div className='sub-detail header'>
                                <label>Biaya Pengiriman</label>
                                <p>Rp{formatterNumber(parseInt(order.order_tracking_total))}</p>
                            </div>
                            <div className='sub-detail header'>
                                <label>Biaya Admin</label>
                                <p>Rp{formatterNumber(parseInt(order.order_admin_amount))}</p>
                            </div>
                            <div className='sub-detail total'>
                                <label>Total</label>
                                <p>Rp{formatterNumber(parseInt(order.order_total_price))}</p>
                            </div>
                        </div>
                        <div className={`button-voucher-payment`}>
                            <button onClick={() => setIsModalPayment(true)}>
                                <span className='label-info'>
                                    <Image src={`/images/payment.png`} alt='payment' width={0} height={0} sizes='100%' />
                                    {!payment.type && 'Pilih Metode Pembayaran'}
                                    {payment.type && `${payment.type_name} - ${payment.name}` }
                                </span>
                                <span className='my-icon'><ChevronRight /></span>
                            </button>
                        </div>
                        <hr />
                        <div className='confirmation-area'>
                            <Checkbox >Dengan ini saya menyetujui Syarat dan Ketentuan yang berlaku</Checkbox>
                            <button className='confirmation-button' onClick={() => processPayment()}>Proses Pembayaran</button>
                        </div>
                    </div>
                </div>
            </div>
            <KeranjangModalPayment 
                isModalOpen={isModalPayment} 
                setIsModalOpen={setIsModalPayment} 
                payment={payment}
                setPayment={setPayment}
            />
            <KeranjangModalPin isModalOpen={isModalPinOpen} setIsModalOpen={setIsModalPinOpen} setView={setView}/>

        </>
    )
}

export default KeranjangPaymentDetailTransaksiView
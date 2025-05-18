import { IOrder, IPayment } from '@/@core/@types/interface'
import { formatterNumber } from '@/@core/utils/general'
import { Copy01 } from '@untitled-ui/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

const KeranjangPaymentWaitingView = (props: {
    setSubView:Dispatch<SetStateAction<string>>,
    order:IOrder,
    payment:IPayment,
}) => {
    const { setSubView, order, payment } = props
    console.log(payment)
    return (
        <div className='waiting-section'>
            <div className='main-container'>
                <div className='header'>
                    <div className='check-icon'>
                        <Image src={`/images/waiting.png`} alt='waiting' width={0} height={0} sizes='100%' />
                    </div>
                    <h5>Menunggu Pembayaran</h5>
                    <p>Mohon untuk segera melakukan pembayaran pada nomor VA yang tertera dibawah ini</p>
                </div>
                <div className='content'>
                    <div className='detail-content'>
                        {payment.method_name == 'VA' &&
                            <>
                                <div className='detail-text'>
                                    <h5>
                                        <Image src={payment.url} alt='payment image' width={0} height={0} sizes='100%' />
                                        {payment.va_bank}
                                    </h5>
                                    <p>{order.pay_ref.virtual_account.toString().replace(/(.{4})/g, '$1 ').trim()}</p>
                                </div>
                                <a><span className='custom-icon'><Copy01 /></span></a>
                            </>
                        }
                        {payment.method_name == 'QRIS' &&
                            <div className='detail-text'>
                                <h5>QRIS</h5>
                            </div>
                        }
                    </div>
                    <hr />
                    <div className='detail-content'>
                        <div className='detail-text'>
                            <h5>Nominal</h5>
                            <p>Rp{formatterNumber(order.pay_ref.total_amount)}</p>
                        </div>
                        <a><span className='custom-icon'><Copy01 /></span></a>
                    </div>
                </div>
                <div className='group-button'>
                    <button onClick={() => setSubView('success')}>Cek Pembayaran</button>
                    <Link href='/'>Kembali ke Beranda</Link>
                </div>
            </div>
        </div>
  )
}

export default KeranjangPaymentWaitingView
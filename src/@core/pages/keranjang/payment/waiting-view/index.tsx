import { IOrder } from '@/@core/@types/interface'
import { formatterNumber } from '@/@core/utils/general'
import { Copy01 } from '@untitled-ui/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

const KeranjangPaymentWaitingView = (props: {
    setSubView:Dispatch<SetStateAction<string>>,
    order:IOrder
}) => {
    const { setSubView, order } = props
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
                        <div className='detail-text'>
                            <h5>
                                <Image src={`/images/bca.png`} alt='bca' width={0} height={0} sizes='100%' />
                                Bank BCA
                            </h5>
                            <p>{order.pay_ref.virtual_account.toString().replace(/(.{4})/g, '$1 ').trim()}</p>
                        </div>
                        <a><span className='custom-icon'><Copy01 /></span></a>
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
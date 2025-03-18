import { Copy01 } from '@untitled-ui/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

const KeranjangPaymentWaitingView = (props: {setView:Dispatch<SetStateAction<string>>}) => {
    const { setView } = props
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
                            <p>7899 7899 7899 7899</p>
                            <a>Lihat Cara Pembayaran</a>
                        </div>
                        <a><span className='custom-icon'><Copy01 /></span></a>
                    </div>
                    <hr />
                    <div className='detail-content'>
                        <div className='detail-text'>
                            <h5>Nominal</h5>
                            <p>Rp 500.000</p>
                        </div>
                        <a><span className='custom-icon'><Copy01 /></span></a>
                    </div>
                </div>
                <div className='group-button'>
                    <button onClick={() => setView('success')}>Cek Pembayaran</button>
                    <Link href='/'>Kembali ke Beranda</Link>
                </div>
            </div>
        </div>
  )
}

export default KeranjangPaymentWaitingView
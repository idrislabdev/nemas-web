import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const KeranjangPaymentSuccessView = () => {
  return (
    <div className='success-section'>
        <div className='main-container'>
            <div className='header'>
                <div className='check-icon'>
                    <Image src={`/images/check-success.png`} alt='check' width={0} height={0} sizes='100%' />
                </div>
                <h5>Pembayaran Berhasil</h5>
                <p>Pesanan akan segera diproses, anda bisa melakukan pelacakan status pesanan ini</p>
            </div>
            <div className='group-button'>
                <Link href='/'>Kembali ke Beranda</Link>
            </div>
        </div>
    </div>
  )
}

export default KeranjangPaymentSuccessView
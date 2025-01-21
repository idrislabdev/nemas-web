import Image from 'next/image'
import React from 'react'

const HomeVerifiedSection = () => {
  return (
    <div className='home-verified-section'>
        <div className='verified-container'>
            <div className='verified-info'>
                <h2>Terverifikasi Oleh</h2>
                <p>
                    Nemas telah terujiji dan terverifiaksi dalam keamanan transaksi dan ijin perdaganan emas 
                    oleh Kementrian Perdagangan Republik Indonesia demi kenyaamanan dan keamanan investasi anda.
                </p>
            </div>
            <Image src={`/images/logo/kemendag.png`} alt='logo kemendag' width={0} height={0} sizes='100%' /> 
        </div>
    </div>
  )
}

export default HomeVerifiedSection
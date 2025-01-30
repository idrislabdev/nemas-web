import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

const JualEmasSuccessView = (props: {setView:Dispatch<SetStateAction<string>>}) => {
    const { setView } = props
  return (
    <div className='success-section'>
        <div className='main-container'>
            <div className='header'>
                <div className='check-icon'>
                    <Image src={`/images/check-success.png`} alt='check' width={0} height={0} sizes='100%' />
                </div>
                <h5>Penjualan Berhasil</h5>
                <p>Terima kasih telah melakukan penjualan emas</p>
            </div>
            <div className='info-summary'>
                <div className='detail-info'>
                    <label>Total Penarikan Hasil Penjualan Emas</label>
                    <p>Rp 16,194,000</p>
                </div>
                <hr />
                <div className='detail-info'>
                    <label>Rekening Tujuan</label>
                    <p>Akun Nemas</p>
                </div>
            </div>
            <div className='group-button'>
                <button onClick={() => setView('main')}>Jual Emas Lagi</button>
                <Link href='/'>Kembali ke Beranda</Link>
            </div>
        </div>
    </div>
  )
}

export default JualEmasSuccessView
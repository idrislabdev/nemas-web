"use client"
import { DeliveryTrucIcon } from '@/@core/components/custom-icons'
import { ChevronRight, InfoCircle } from '@untitled-ui/icons-react'
import Image from 'next/image'
import React, { useState } from 'react'
import ModalShipment from './modal-shipment'
import { useRouter } from 'next/navigation'

const CheckoutPageWrapper = () => {
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const router = useRouter();

    const onPayment = () => {
        router.push("/payment")
    }
    return (
        <main className='checkout-page sm:mobile-responsive md:mobile-responsive'>
            <div className='header-section'>
                <h2>Metode Pengiriman</h2>
            </div>
            <div className='main-section'>
                <div className='main-section'>
                    <div className='main-container'>
                        <div className='payment-type'>
                            <Image 
                                src={`/images/courier.png`}
                                alt='courier' 
                                width={0} 
                                height={0} 
                                sizes='100%' 
                            />
                            <p>Pengiriman by Kurir</p>
                        </div>
                        <p className='text-notice'>
                            Isi alamat tujuan dan pilihlah 
                            ekspedisi untuk pengiriman
                        </p>
                        <div className='text-address'>
                            <div className='title'>
                                <label>Alamat Pengiriman</label>
                                <a>Ubah Alamat</a>
                            </div>
                            <input />
                        </div>
                        <div className='shipment-type'>
                            <h5 className='title'>Jasa Pengiriman</h5>
                            <hr />
                            <div className='shipment-info'>
                                <div className='shipment-recomendation'>
                                    <InfoCircle />
                                    <div className='text-recomendation'>
                                        <label>Jasa ekspedisi yang direkomendasikan</label>
                                        <span>J&amp;T</span>
                                    </div>
                                </div>
                                <a onClick={() => setIsModalOpen(true)}>
                                    <span className='text'><DeliveryTrucIcon />Pilih Ekspedisi</span>
                                    <span className='icon'><ChevronRight /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-container'>
                    <div className='summary-info'>
                        <label>Total Pembayaran</label>
                        <p>Rp 5,136,000</p>
                    </div>
                    <button onClick={() => onPayment()}>Konfirmasi Pesanan</button>
                </div>
            </div>
            <ModalShipment 
                isModalOpen={isModalOpen} 
                setIsModalOpen={setIsModalOpen} 
            />
        </main>
    )
}

export default CheckoutPageWrapper
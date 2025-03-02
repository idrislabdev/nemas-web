"use client";

import { Minus, Plus, Trash01 } from '@untitled-ui/icons-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const KeranjangPageWrapper = () => {
    const router = useRouter();
    
    const onCheckout = () => {
        router.push("/checkout")
    }
    return (
        <main className='keranjang-page sm:mobile-responsive'>
            <div className='header-section'>
                <h2>Keranjang Belanja</h2>
            </div>
            <div className='main-section'>
                <div className='main-container'>
                    <div className='carts-area'>
                        <div className='cart'>
                            <div className='image-area'>
                                <Image 
                                    src={`/images/dummy-product.png`}
                                    alt='image1' 
                                    width={0} 
                                    height={0} 
                                    sizes='100%' 
                                />
                            </div>
                            <div className='detail-area'>
                                <div className='description'>
                                    <h5>LM Antam</h5>
                                    <p>999.9%</p>
                                    <span>0.5 Gr</span>
                                </div>
                                <div className='price'>
                                    <label>Rp 856,000</label>
                                </div>
                                <div className='count-input'>
                                    <button className='minus'><Minus /></button>
                                    <input placeholder='1'/>
                                    <button className='plus'><Plus /></button>
                                </div>                                
                            </div>
                            <div className='action'>
                                <a><Trash01 /></a>
                            </div>
                        </div>
                        <div className='cart'>
                            <div className='image-area'>
                                <Image 
                                    src={`/images/dummy-product.png`}
                                    alt='image1' 
                                    width={0} 
                                    height={0} 
                                    sizes='100%' 
                                />
                            </div>
                            <div className='detail-area'>
                                <div className='description'>
                                    <h5>LM Antam</h5>
                                    <p>999.9%</p>
                                    <span>0.5 Gr</span>
                                </div>
                                <div className='price'>
                                    <label>Rp 856,000</label>
                                </div>
                                <div className='count-input'>
                                    <button className='minus'><Minus /></button>
                                    <input placeholder='1'/>
                                    <button className='plus'><Plus /></button>
                                </div>
                            </div>
                            <div className='action'>
                                <a><Trash01 /></a>
                            </div>
                        </div>
                    </div>
                    <div className='payment-area'>
                        <div className='card'>
                            <div className='card-title'>
                                <h5>Metode Pengiriman</h5>
                            </div>
                            <div className='card-body'>
                                <h6>
                                    Pilih metode pengiriman yang ke tempat 
                                    anda atau ambil pesanan di outlet terdekat
                                </h6>
                                <div className='payment-list'>
                                    <div className='payment-title'>
                                        <Image 
                                            src={`/images/courier.png`}
                                            alt='courier' 
                                            width={0} 
                                            height={0} 
                                            sizes='100%' 
                                        />
                                        <p>Pengiriman by Kurir</p>
                                    </div>
                                    <p>
                                        Pesanan akan dikirimkan melalui kurir 
                                        dengan aman sampai tujuan
                                    </p>
                                </div>
                                <div className='payment-list'>
                                    <div className='payment-title'>
                                        <Image 
                                            src={`/images/shopping-bag.png`}
                                            alt='shopping bag' 
                                            width={0} 
                                            height={0} 
                                            sizes='100%' 
                                        />
                                        <p>Pick-Up di Outlet</p>
                                    </div>
                                    <p>
                                        Ambil pesanan di outlet terdekat atau outlet 
                                        lain pilihan anda
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-container'>
                    <div className='summary-info'>
                        <label>Total Pembayaran</label>
                        <p>Rp 5,136,000</p>
                    </div>
                    <button onClick={() => onCheckout()}>Checkout</button>
                </div>
            </div>
        </main>
    )
}

export default KeranjangPageWrapper
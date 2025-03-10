"use client";

import { ICart } from '@/@core/@types/interface';
import { formatterNumber } from '@/@core/utils/general';
import { Minus, Plus, Trash01 } from '@untitled-ui/icons-react'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react'

const KeranjangCart = (props: {
    setView:Dispatch<SetStateAction<string>>,
    carts:ICart[],
    summary:number,
    deleteData: (id:string) => void,
    updateCart: (item:ICart, qty:number) => void,
}) => {
    const { setView, carts, summary, deleteData, updateCart } = props 
    const [selectedMethod, setSelectedMethod] = useState('');

    return (
        <>
            <div className='header-section'>
                <h2>Keranjang Belanja</h2>
            </div>
            <div className='main-section'>
                <div className='main-container'>
                    <div className='carts-area'>
                        {carts.map((item, index:number) => (
                            <div className='cart' key={index}>
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
                                        <span>{parseInt(item.weight)}Gr</span>
                                    </div>
                                    <div className='price'>
                                        <label>Rp{formatterNumber(parseInt(item.price))}</label>
                                    </div>
                                    <div className='count-input'>
                                        <button className='btn-qty' onClick={() => updateCart(item, item.quantity - 1)} disabled={item.quantity == 1}><Minus /></button>
                                        <label>{item.quantity}</label>
                                        <button className='btn-qty' onClick={() => updateCart(item, item.quantity + 1)}><Plus /></button>
                                    </div>
                                </div>
                                <div className='action'>
                                    <a onClick={() => deleteData(item.order_cart_detail_id)}><Trash01 /></a>
                                </div>
                            </div>
                        ))}
                        
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
                                <div className={`payment-list ${selectedMethod == 'shipping' ? 'selected' : ''}`} onClick={() => setSelectedMethod('shipping')}>
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
                                <div className={`payment-list ${selectedMethod == 'pickup' ? 'selected' : ''}`} onClick={() => setSelectedMethod('pickup')}>
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
                        <p>Rp{formatterNumber(summary)}</p>
                    </div>
                    <button onClick={() => setView('shipping')}>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default KeranjangCart
"use client";

import { ICart, IGold, IOrder, IOrderDetail } from '@/@core/@types/interface';
import axiosInstance from '@/@core/utils/axios';
import { formatterNumber } from '@/@core/utils/general';
import { Minus, Plus, Trash01 } from '@untitled-ui/icons-react'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useGlobals } from '@/@core/hoc/useGlobals'

const KeranjangCart = (props: {
    setView:Dispatch<SetStateAction<string>>,
    carts:ICart[],
    weight:number
    summary:number,
    deleteData: (id:string) => void,
    updateCart: (item:ICart, qty:number) => void,
    order:IOrder,
    setOrder:Dispatch<SetStateAction<IOrder>>,
}) => {
    const { setView, carts, weight, summary, deleteData, updateCart, order, setOrder } = props 
    const [selectedMethod, setSelectedMethod] = useState('');
    const { globals } = useGlobals()

    const fetchGold = async (id:number) => {
        const resp = await axiosInstance.get(`/core/gold/${id}/`);
        const { data } = resp
        return data
    }

    const onCheckout = async () => {
        const details:IOrderDetail[] = [] as IOrderDetail[];
        const user = globals.userLogin
        for (let index = 0; index < carts.length; index++) {
            const item = carts[index];
            const gold:IGold = await fetchGold(item.gold_id)
            const temp:IOrderDetail = {
                gold: item.gold_id,
                gold_type: gold.type ? gold.type : '',
                gold_brand: gold.brand ? gold.brand : '',
                certificate_number: gold.certificate_number ? gold.certificate_number : '',
                order_weight: item.weight,
                order_price: item.price,
                order_qty: item.quantity,
                order_cert_price: "5000",
                order_detail_total_price: item.total_price
            }
            details.push(temp)
        }
        const resp  = await axiosInstance.get(`users/user/address/`);
        const { data } = resp
        setOrder({...order,
            user: user.id,
            order_amount: summary.toString(),
            order_item_weight: weight.toString(),
            order_promo_code: "0",
            order_discount: "0",
            order_admin_amount: "5000",
            order_user_address: data.id,
            order_pickup_address: data.address,
            order_phone_number: user.phone_number,
            order_details: details
        })
        setView('shipping')
    }

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
                    <button onClick={() => onCheckout()}>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default KeranjangCart
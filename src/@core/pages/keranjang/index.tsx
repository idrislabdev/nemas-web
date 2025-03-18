"use client";

import React, { useCallback, useEffect, useState } from 'react'
import KeranjangCart from './cart';
import KeranjangShipping from './shipping-method';
import axiosInstance from '@/@core/utils/axios';
import { ICart, IOrder } from '@/@core/@types/interface';
import { useGlobals } from '@/@core/hoc/useGlobals';
import KeranjangPayment from './payment';

const KeranjangPageWrapper = () => {
    const [view, setView] = useState('cart')
    const [carts, setCarts] = useState<ICart[]>([])
    const [summary, setSummary] = useState(0)
    const [totalWeight, setTotalWeight] = useState(0)
    const { globals, saveGlobals } = useGlobals()
    const [order, setOrder] = useState<IOrder>({} as IOrder);
    
    const fetchData = useCallback(async () => {
        const resp = await axiosInstance.get(`order/cart/?offset=0&limit=100`);
        const { results } = resp.data
        let temp = 0;
        let weight = 0;
        results.forEach((item:ICart) => {
            temp = temp + parseInt(item.price) * item.quantity
            weight = weight + parseInt(item.weight)
        });
        setCarts(results)
        setSummary(temp)
        setTotalWeight(weight);
    }, [setCarts, setSummary, setTotalWeight])

    const deleteData = async (id:string) => {
        await axiosInstance.delete(`order/cart/delete/${id}/`);
        const resp = await axiosInstance.get(`order/cart/?offset=0&limit=100`);
        const { results } = resp.data
        let temp = 0;
        results.forEach((item:ICart) => {
            temp = temp + parseInt(item.price) * item.quantity
        });
        setCarts(results)
        setSummary(temp)
        saveGlobals({...globals, cartCount: results.length})
    }
    const updateCart = async (item:ICart, qty:number) => {
        const body = {
            "gold": item.gold_id,
            "weight": item.weight,
            "price": item.price,
            "quantity": qty
        }
        await axiosInstance.put(`order/cart/update/${item.order_cart_detail_id}/`, body);
        fetchData();
    }

    useEffect(() => {
        fetchData()
    }, [fetchData])
    return (
        <main className='keranjang-page sm:mobile-responsive md:mobile-responsive'>
            {view == 'cart' && 
                <KeranjangCart 
                    setView={setView} 
                    carts={carts} 
                    summary={summary}
                    weight={totalWeight} 
                    deleteData={deleteData} 
                    updateCart={updateCart} 
                    order={order}
                    setOrder={setOrder}
                />
            }
            {view == 'shipping' && 
                <KeranjangShipping 
                    setView={setView} 
                    summary={summary} 
                    totalWeight={totalWeight}
                    order={order}
                    setOrder={setOrder}
                />
            }
            {view == 'payment' &&
                <KeranjangPayment 
                    order={order}
                    setOrder={setOrder}
                />
            }
        </main>
    )
}

export default KeranjangPageWrapper
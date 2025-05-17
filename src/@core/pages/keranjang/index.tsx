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
        const resp = await axiosInstance.get(`orders/fix/cart/detail/?offset=0&limit=100`);
        const { results } = resp.data
        let temp = 0;
        let weight = 0;
        results.forEach((item:ICart) => {
            temp = temp + parseInt(item.total_price_round)
            weight = weight + parseInt(item.weight)
        });
        console.log(weight)
        setCarts(results)
        setSummary(temp)
        setTotalWeight(weight);
    }, [setCarts, setSummary, setTotalWeight])

    const deleteData = async (id:string) => {
        await axiosInstance.delete(`orders/fix/cart/delete/${id}/`);
        const resp = await axiosInstance.get(`orders/fix/cart/detail/?offset=0&limit=100`);
        const { results } = resp.data
        let temp = 0;
        results.forEach((item:ICart) => {
            temp = temp + parseInt(item.total_price_round)
        });
        setCarts(results)
        setSummary(temp)
        saveGlobals({...globals, cartCount: results.length})
    }
    const updateCart = async (item:ICart, qty:number) => {
        const body = {
            "gold_id": item.gold_id,
            "quantity": qty,
            "order_type" : "buy"
        }
        await axiosInstance.post("/orders/fix/cart/add/", body)
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
                    setView={setView} 
                />
            }
        </main>
    )
}

export default KeranjangPageWrapper
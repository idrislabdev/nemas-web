"use client";

import { SearchSm, ShoppingCart03 } from '@untitled-ui/icons-react'
import { Input, message } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import '@/styles/produk.css'
import Image from 'next/image'
import { IGold, IUserLogin } from '@/@core/@types/interface'
import debounce from 'debounce'
import axiosInstance from '@/@core/utils/axios';
import { useRouter } from 'next/navigation';
import { formatterNumber } from '@/@core/utils/general';

const ProdukPageWrapper = (props : {products:IGold[]}) => {
    const router = useRouter();
    const { products } = props;
    console.log(products)
    const [golds, setGolds] = useState<IGold[]>([])
    const [user, setUser] = useState<IUserLogin>()
    const [messageApi, contextHolder] = message.useMessage();
    const [params, setParams] = useState({
        format: 'json',
        offset: 0,
        limit: 100,
        search:"",
    });

    const fetchData = useCallback(async () => {
        const respActive = await axiosInstance.get(`/core/gold/price/active`)
        const active = respActive.data
        console.log(active)
        const resp = await axiosInstance.get(`/core/gold/`, { params });
        const { results } = resp.data

        results.forEach((item:IGold) => {
            let addOn = 100000
            if (item.brand == 'Antam')
                addOn = 125000

            item.price = ((Math.ceil(active.gold_price_buy) + addOn) * item.gold_weight)
        });
        setGolds(resp.data.results)
        // setTotal(resp.data.count)
    },[params])

    const handleFilter = (value:string) => {
        setParams({
           ...params,
           offset: 0,
           limit: 10,
           search: value,
        });
     };
    const successCart = () => {
        messageApi.open({
          type: 'success',
          content: 'Berhasil menambahkan barang dalam keranjang',
          duration: 10,
        });
      };
    

    const addToCart = async (item:IGold) => {
        if (user && user.name) {
            const body = {
                "gold": item.gold_id,
                "weight": item.gold_weight,
                "price": item.price,
                "quantity": 1
            }
            await axiosInstance.post("/order/cart/add/", body)
            const resp = await axiosInstance.get("/order/cart/?offset=0&limit=100")
            console.log(resp.data)
            successCart()
        } else {
            router.push("/login")
        }
    }

    useEffect(() => {
        const temp:IUserLogin = JSON.parse(localStorage.getItem("user") || "{}")
        setUser(temp)
    },[setUser])
    

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <main className='produk-page sm:mobile-responsive md:mobile-responsive'>
            {contextHolder}
            <div className='header-section'>
                <h2>Produk Emas Fisik</h2>
                <div className='filter-area'>
                    <Input prefix={<span><SearchSm /></span>} size='large' 
                        onChange={debounce(
                            (event) => handleFilter(event.target.value),
                            1000
                        )}
                    />
                </div>
            </div>
            <div className='product-section'>
                {golds.map((item, index:number) => (
                    <div className='card-wrapper' key={index}>
                        <div className='card-product'>
                            <div className='image'>
                                <Image 
                                    src={item.gold_image_1 != '' ? item.gold_image_1 : `/images/dummy-product.png`}
                                    alt='image1' 
                                    width={0} 
                                    height={0} 
                                    sizes='100%' 
                                />
                            </div>
                            <div className='description'>
                                <div className='label'>
                                    <label>{item.brand}</label>
                                    <span>{item.gold_weight} Gr</span>
                                </div>
                                <p>Rp{formatterNumber(item.price)}</p>
                                <button onClick={() => addToCart(item)}>
                                    <span><ShoppingCart03 /></span>
                                    Tambah ke Keranjang
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
  )
}

export default ProdukPageWrapper
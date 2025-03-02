"use client";

import { SearchSm, ShoppingCart03 } from '@untitled-ui/icons-react'
import { Input } from 'antd'
import React, { useState } from 'react'
import '@/styles/produk.css'
import Image from 'next/image'
import { IGold } from '@/@core/@types/interface'
import debounce from 'debounce'

const ProdukPageWrapper = (props : {products:IGold[]}) => {
    const { products } = props;
    const [golds, setGolds] = useState(products)
    console.log(products)
    const handleFilter = (value:string) => {
        console.log(value)
        setGolds(products)
     };
    return (
        <main className='produk-page sm:mobile-responsive'>
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
                                <p>Rp 1,712,000</p>
                                <button>
                                    <span><ShoppingCart03 /></span>
                                    Tambah ke Keranjang
                                </button>
                            </div>

                        </div>
                    </div>
                ))

                    
                }
            </div>
        </main>
  )
}

export default ProdukPageWrapper
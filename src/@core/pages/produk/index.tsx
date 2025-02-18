import { SearchSm, ShoppingCart03 } from '@untitled-ui/icons-react'
import { Input } from 'antd'
import React from 'react'
import '@/styles/produk.css'
import Image from 'next/image'

const ProdukPageWrapper = () => {
  return (
    <main className='produk-page sm:mobile-responsive'>
        <div className='header-section'>
            <h2>Produk Emas Fisik</h2>
            <div className='filter-area'>
                <Input prefix={<span><SearchSm /></span>} size='large' />
            </div>
        </div>
        <div className='product-section'>
            <div className='card-wrapper'>
                <div className='card-product'>
                    <div className='image'>
                        <Image 
                            src={`/images/dummy-product.png`}
                            alt='image1' 
                            width={0} 
                            height={0} 
                            sizes='100%' 
                        />
                    </div>
                    <div className='description'>
                        <div className='label'>
                            <label>LM Antam 999.9%</label>
                            <span>1 Gr</span>
                        </div>
                        <p>Rp 1,712,000</p>
                        <button>
                            <span><ShoppingCart03 /></span>
                            Tambah ke Keranjang
                        </button>
                    </div>

                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card-product'>
                    <div className='image'>
                        <Image 
                            src={`/images/dummy-product.png`}
                            alt='image1' 
                            width={0} 
                            height={0} 
                            sizes='100%' 
                        />
                    </div>
                    <div className='description'>
                        <div className='label'>
                            <label>LM Antam 999.9%</label>
                            <span>1 Gr</span>
                        </div>
                        <p>Rp 1,712,000</p>
                        <button>
                            <span><ShoppingCart03 /></span>
                            Tambah ke Keranjang
                        </button>
                    </div>

                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card-product'>
                    <div className='image'>
                        <Image 
                            src={`/images/dummy-product.png`}
                            alt='image1' 
                            width={0} 
                            height={0} 
                            sizes='100%' 
                        />
                    </div>
                    <div className='description'>
                        <div className='label'>
                            <label>LM Antam 999.9%</label>
                            <span>1 Gr</span>
                        </div>
                        <p>Rp 1,712,000</p>
                        <button>
                            <span><ShoppingCart03 /></span>
                            Tambah ke Keranjang
                        </button>
                    </div>

                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card-product'>
                    <div className='image'>
                        <Image 
                            src={`/images/dummy-product.png`}
                            alt='image1' 
                            width={0} 
                            height={0} 
                            sizes='100%' 
                        />
                    </div>
                    <div className='description'>
                        <div className='label'>
                            <label>LM Antam 999.9%</label>
                            <span>1 Gr</span>
                        </div>
                        <p>Rp 1,712,000</p>
                        <button>
                            <span><ShoppingCart03 /></span>
                            Tambah ke Keranjang
                        </button>
                    </div>

                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card-product'>
                    <div className='image'>
                        <Image 
                            src={`/images/dummy-product.png`}
                            alt='image1' 
                            width={0} 
                            height={0} 
                            sizes='100%' 
                        />
                    </div>
                    <div className='description'>
                        <div className='label'>
                            <label>LM Antam 999.9%</label>
                            <span>1 Gr</span>
                        </div>
                        <p>Rp 1,712,000</p>
                        <button>
                            <span><ShoppingCart03 /></span>
                            Tambah ke Keranjang
                        </button>
                    </div>

                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card-product'>
                    <div className='image'>
                        <Image 
                            src={`/images/dummy-product.png`}
                            alt='image1' 
                            width={0} 
                            height={0} 
                            sizes='100%' 
                        />
                    </div>
                    <div className='description'>
                        <div className='label'>
                            <label>LM Antam 999.9%</label>
                            <span>1 Gr</span>
                        </div>
                        <p>Rp 1,712,000</p>
                        <button>
                            <span><ShoppingCart03 /></span>
                            Tambah ke Keranjang
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </main>
  )
}

export default ProdukPageWrapper
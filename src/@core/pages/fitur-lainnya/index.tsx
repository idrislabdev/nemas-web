"use client"

import ModalPlaystore from '@/@core/components/modals/modal-playstore'
import Image from 'next/image'
import React, { useState } from 'react'

const FiturLainnyaPageWrapper = () => {
    const [ ismodalOpen, setIsModalOpen ] = useState(false)
  return (
    <main className='fitur-lainnya-page sm:mobile-responsive'>
        <div className='header-section'>
            <h2>Fitur Lainnya</h2>
        </div>
        <div className='main-section'>
            <div className='main-container'>
                <div className='card'>
                    <Image src={`/images/nemas-1.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                    <div className='content'>
                        <div className='text-description'>
                            <h5>Tabungan Emas</h5>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore 
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                Nemo enim ipsam voluptatem quia 
                            </p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)}>Menabung Sekarang !</button>
                    </div>
                </div>
                <div className='card reverse'>
                    <Image src={`/images/nemas-2.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                    <div className='content'>
                        <div className='text-description'>
                            <h5>Beli Emas</h5>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore 
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                Nemo enim ipsam voluptatem quia 
                            </p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)}>Beli Sekarang !</button>
                    </div>
                </div>
                <div className='card'>
                    <Image src={`/images/nemas-3.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                    <div className='content'>
                        <div className='text-description'>
                            <h5>Investasi</h5>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore 
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                Nemo enim ipsam voluptatem quia 
                            </p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)}>Invest Sekarang !</button>
                    </div>
                </div>
                <div className='card reverse'>
                    <Image src={`/images/nemas-4.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                    <div className='content'>
                        <div className='text-description'>
                            <h5>Jual Emas</h5>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore 
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                Nemo enim ipsam voluptatem quia 
                            </p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)}>Transaksi Sekarang !</button>
                    </div>
                </div>
                <div className='card'>
                    <Image src={`/images/nemas-5.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                    <div className='content'>
                        <div className='text-description'>
                            <h5>Tarik Emas</h5>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore 
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                Nemo enim ipsam voluptatem quia 
                            </p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)}>Tarik Sekarang !</button>
                    </div>
                </div>
                <div className='card reverse'>
                    <Image src={`/images/nemas-6.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                    <div className='content'>
                        <div className='text-description'>
                            <h5>Jaminan Emas</h5>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore 
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                Nemo enim ipsam voluptatem quia 
                            </p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)}>Ajukan Sekarang !</button>
                    </div>
                </div>
                <div className='card'>
                    <Image src={`/images/nemas-7.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                    <div className='content'>
                        <div className='text-description'>
                            <h5>Tarik Saldo</h5>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore 
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                Nemo enim ipsam voluptatem quia 
                            </p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)}>Tarik Sekarang !</button>
                    </div>
                </div>
                <div className='card reverse'>
                    <Image src={`/images/nemas-8.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                    <div className='content'>
                        <div className='text-description'>
                            <h5>Kirim Emas ke Member</h5>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore 
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                Nemo enim ipsam voluptatem quia 
                            </p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)}>Kirim Sekarang !</button>
                    </div>
                </div>
            </div>
        </div>
        <ModalPlaystore isModalOpen={ismodalOpen} setIsModalOpen={setIsModalOpen} />
    </main>
  )
}

export default FiturLainnyaPageWrapper
"use client"

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import ModalPlaystore from '@/@core/components/modals/modal-playstore';
const PartnerFeaturesSection = () => {
    const [ ismodalOpen, setIsModalOpen ] = useState(false)
    
    return (
        <>
            <div className='partner-features-section'>
                <h2>Features</h2>
                <div className='features-container'>
                    <Swiper
                        navigation={false}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        loop={true}  
                        centeredSlides={true} 
                        centeredSlidesBounds={true} 
                        slidesPerView={1} 
                    >
                        <SwiperSlide>
                            <div className='card-content'>
                                <Image src={`/images/nemas-1.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                                <div className='content'>
                                    <div className='text-description'>
                                        <h5>Tabungan Emas</h5>
                                        <p>
                                            Nemas memungkinkan pengguna menabung emas secara digital dengan pembelian emas dalam jumlah kecil, 
                                            memantau saldo emas real-time melalui platform yang aman dan praktis.
                                        </p>
                                    </div>
                                    <button onClick={() => setIsModalOpen(true)}>Menabung Sekarang !</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card-content'>
                                <Image src={`/images/nemas-2.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                                <div className='content'>
                                    <div className='text-description'>
                                        <h5>Beli Emas</h5>
                                        <p>
                                            Nemas memberikan kemudahan pengguna membeli emas secara online , mulai dari nominal kecil, 
                                            serta menyimpan emas tersebut secara digital dengan akses real-time untuk memantau nilai investasi 
                                            secara fleksibel kapan saja.
                                        </p>
                                    </div>
                                    <button onClick={() => setIsModalOpen(true)}>Beli Sekarang !</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card-content'>
                                <Image src={`/images/nemas-3.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                                <div className='content'>
                                    <div className='text-description'>
                                        <h5>Investasi</h5>
                                        <p>
                                            Pengguna dapat membeli emas digital dan berbagai produk Nemas lainnya sebagai aset investasi 
                                            jangka panjang & memantau nilai aset secara real-time.
                                        </p>
                                    </div>
                                    <button onClick={() => setIsModalOpen(true)}>Invest Sekarang !</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card-content'>
                                <Image src={`/images/nemas-4.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                                <div className='content'>
                                    <div className='text-description'>
                                        <h5>Jual Emas</h5>
                                        <p>
                                            Pengguna dapat menjual emas digital mereka dengan mudah dan cepat, mendapatkan harga sesuai nilai pasar terkini, 
                                            serta menikmati pencairan dana yang praktis dan aman langsung ke rekening
                                        </p>
                                    </div>
                                    <button onClick={() => setIsModalOpen(true)}>Transaksi Sekarang !</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card-content'>
                                <Image src={`/images/nemas-5.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                                <div className='content'>
                                    <div className='text-description'>
                                        <h5>Tarik Emas</h5>
                                        <p>
                                            Pengguna Nemas dapt mengubah saldo emas digital mereka menjadi emas fisik, 
                                            dengan proses pemesanan mudah dan pengiriman emas batangan langsung ke alamat yang diinginkan.
                                        </p>
                                    </div>
                                    <button onClick={() => setIsModalOpen(true)}>Tarik Sekarang !</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card-content'>
                                <Image src={`/images/nemas-6.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                                <div className='content'>
                                    <div className='text-description'>
                                        <h5>Jaminan Emas</h5>
                                        <p>
                                            Jaminan emas memberikan perlindungan asuransi untuk simpanan emas digital pengguna, 
                                            memastikan keamanan aset dari risiko kehilangan, kerusakan, atau fluktuasi ekstrem dengan pengelolaan yang transparan dan terpercaya.
                                        </p>
                                    </div>
                                    <button onClick={() => setIsModalOpen(true)}>Ajukan Sekarang !</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card-content'>
                                <Image src={`/images/nemas-7.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                                <div className='content'>
                                    <div className='text-description'>
                                        <h5>Tarik Saldo</h5>
                                        <p>
                                            Pengguna dapat mencairkan saldo hasil penjualan emas digital mereka ke 
                                            rekening bank dengan proses yang cepat, mudah, dan aman.
                                        </p>
                                    </div>
                                    <button onClick={() => setIsModalOpen(true)}>Tarik Sekarang !</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card-content'>
                                <Image src={`/images/nemas-8.png`} alt='image1' width={0} height={0} sizes='100%' />                    
                                <div className='content'>
                                    <div className='text-description'>
                                        <h5>Kirim Emas ke Member</h5>
                                        <p>
                                            Pengguna dapat mengirimkan saldo emas digital mereka secara instan 
                                            dan aman ke member Nemas lainnya, tanpa perlu proses rumit.
                                        </p>
                                    </div>
                                    <button onClick={() => setIsModalOpen(true)}>Kirim Sekarang !</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <ModalPlaystore isModalOpen={ismodalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    )
}

export default PartnerFeaturesSection
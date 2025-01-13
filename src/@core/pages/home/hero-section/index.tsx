"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const HomeHeroSection = () => {
  return (
    <div className='home-hero-section'>
        <div className='text-container'>
            <h1>Investasi <span>Emas</span> Tanpa Batas Dengan <span>NEMAS</span></h1>
            <button>Beli Emas Sekarang!</button>
        </div>
        <div className='banner-container'>
            <Swiper
                navigation={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <Image src='/images/swipers/image1.png' alt='swiper' width={0} height={0} sizes='100%'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='/images/swipers/image1.png' alt='swiper' width={0} height={0} sizes='100%'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='/images/swipers/image1.png' alt='swiper' width={0} height={0} sizes='100%'/>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default HomeHeroSection
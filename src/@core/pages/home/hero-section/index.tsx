"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const HomeHeroSection = () => {
  return (
    <div className='home-hero-section'>
        <div className='banner-container'>
            <Swiper
                navigation={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <div className='slide-container'>
                        <h5>Investasi <span>EMAS</span> Tanpa Batas Dengan <span>NEMAS</span></h5>
                        <button>Beli Emas Sekarang!</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-container'>
                        <h5>Investasi <span>EMAS</span> Tanpa Batas Dengan <span>NEMAS</span></h5>
                        <button>Beli Emas Sekarang!</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-container'>
                        <h5>Investasi <span>EMAS</span> Tanpa Batas Dengan <span>NEMAS</span></h5>
                        <button>Beli Emas Sekarang!</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default HomeHeroSection
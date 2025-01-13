"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const HomeTestimonySection = () => {
  return (
    <div className='home-testimony-section'>
        <h2>Testimoni</h2>
        <div className='testimony-container'>
            <Swiper
                navigation={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                slidesPerView={3}
            >
                <SwiperSlide>
                    <div className='testimony-card'>
                        <p>Cara mudah dan cepat untuk membeli emas, sangat memuaskan! </p>
                        <span className='font-bold'>“Marwoto”</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='testimony-card'>
                        <p>Cara mudah dan cepat untuk membeli emas, sangat memuaskan! </p>
                        <span className='font-bold'>“Sugiarto”</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='testimony-card'>
                        <p>Cara mudah dan cepat untuk membeli emas, sangat memuaskan! </p>
                        <span className='font-bold'>“Sulaiman”</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border border-primary rounded-[8px] flex flex-col gap-[9px] py-[20px] px-[13px]'>
                        <p>Cara mudah dan cepat untuk membeli emas, sangat memuaskan! </p>
                        <span className='font-bold'>“Sulaiman”</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default HomeTestimonySection
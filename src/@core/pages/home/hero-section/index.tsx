"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

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
                    <div className='img-container'> 
                        <Image src={`/images/swipers/hero-big.png`} alt='image1' width={0} height={0} sizes='100%' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>     
                    <div className='img-container'> 
                        <Image src={`/images/swipers/hero-big.png`} alt='image1' width={0} height={0} sizes='100%' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>     
                    <div className='img-container'> 
                        <Image src={`/images/swipers/hero-big.png`} alt='image1' width={0} height={0} sizes='100%' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default HomeHeroSection
"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { IPromo } from '@/@core/@types/interface';

const HomeHeroSection = (props: {banners:IPromo[]}) => {
    const { banners } = props
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
                    {banners.map((item, index:number) => (
                        <SwiperSlide key={index}>     
                            <div className='img-container'> 
                                <Image 
                                    src={`${item.promo_url_background}`} 
                                    alt={item.promo_name ? item.promo_name : 'image1'} 
                                    width={0} 
                                    height={0} 
                                    sizes='100%' 
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default HomeHeroSection
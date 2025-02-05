"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { IRating } from '@/@core/@types/interface';
const HomeTestimonySection = (props: {testimonies:IRating[]}) => {
    const { testimonies } = props
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
                    {testimonies.map((item:IRating, index:number) => (
                        <SwiperSlide key={index}>
                            <div className='testimony-card'>
                                <p className='line-clamp-2'>{item.message}</p>
                                <span className='font-bold'>“{item.information_rate_name}”</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default HomeTestimonySection
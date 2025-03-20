"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { IRating } from '@/@core/@types/interface';
import Image from 'next/image';
const HomeHightlightSection = (props: {testimonies:IRating[]}) => {
    const { testimonies } = props
    return (
        <div className='home-highlight-section'>
            <h2>Highlight</h2>
            <div className='highlight-container'>
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
                            <div className={`highlight-card ${index % 2 == 0 ? 'blue' : 'yellow'}`}>
                                <div className='card-img'>
                                    <Image src={`/images/bulp-icon.png`} alt='bulp' width={0} height={0} sizes='100%' />
                                </div>
                                <div className='card-desc'>
                                    <p>cashback 50% !</p>
                                    <span>Dapatkan manfaatnya dengan konsisten menabung emas</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    {testimonies.map((item:IRating, index:number) => (
                        <SwiperSlide key={index}>
                            <div className={`highlight-card ${index % 2 == 0 ? 'yellow' : 'blue'}`}>
                                <div className='card-img'>
                                    <Image src={`/images/bulp-icon.png`} alt='bulp' width={0} height={0} sizes='100%' />
                                </div>
                                <div className='card-desc'>
                                    <p>cashback 50% !</p>
                                    <span>Dapatkan manfaatnya dengan konsisten menabung emas</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default HomeHightlightSection
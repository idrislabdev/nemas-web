"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { IPromo } from '@/@core/@types/interface';
import Image from 'next/image';
const HomeHightlightSection = (props: {promoes:IPromo[]}) => {
    const { promoes } = props
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
                    {promoes.map((item:IPromo, index:number) => (
                        <SwiperSlide key={index}>
                            <div className={`highlight-card`} style={{ backgroundColor: item.hexcode}}>
                                <div className='card-img'>
                                    <Image src={`/images/bulp-icon.png`} alt='bulp' width={0} height={0} sizes='100%' />
                                </div>
                                <div className='card-desc'>
                                    <p>{item.promo_code}</p>
                                    <span>{item.promo_name}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                 {promoes.map((item:IPromo, index:number) => (
                        <SwiperSlide key={index}>
                            <div className={`highlight-card`} style={{ backgroundColor: item.hexcode}}>
                                <div className='card-img'>
                                    <Image src={`/images/bulp-icon.png`} alt='bulp' width={0} height={0} sizes='100%' />
                                </div>
                                <div className='card-desc'>
                                    <p>{item.promo_code}</p>
                                    <span>{item.promo_name}</span>
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
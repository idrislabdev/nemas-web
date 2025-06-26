"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { IRating } from '@/@core/@types/interface';
import Image from 'next/image';
const PartnerTestimonySection = (props: {testimonies:IRating[]}) => {
    const { testimonies } = props
    return (
        <div className='partner-testimony-section'>
            <h2>Testimonials</h2>
            <div className='testimony-container'>
                <Swiper
                    navigation={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    loop={true}  
                    centeredSlides={true} 
                    centeredSlidesBounds={true} 
                    slidesPerView={'auto'} 
                >
                    {testimonies.map((item:IRating, index:number) => (
                        <SwiperSlide key={index}>
                            <div className='testimony-card'>
                                <Image src={`/images/partners/bca.png`} width={0} height={0} sizes='100%' alt='bca' />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Aliquam eget nunc sed erat efficitur condimentum. Cras quis rutrum ipsum. 
                                    Praesent molestie, risus sed aliquet interdum.
                                </p>
                                <div className='note'>
                                    <label>Name</label>
                                    <span>“{item.information_rate_name}”</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default PartnerTestimonySection
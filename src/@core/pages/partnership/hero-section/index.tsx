"use client"

import Image from 'next/image';
import React from 'react'


const PartnerHeroSection = () => {
    return (
        <>
            <div className='partner-hero-section'>
                <div className='banner-container'>
                    <div className='text-area'>
                        <h2>Investasi <span>EMAS</span> Tanpa Batas Dengan <span>NEMAS</span></h2>
                        <a className='cursor-pointer'>Hubungi Via Email</a>
                    </div>
                    <Image 
                        src={`/images/phone-nemas.png`}
                        alt={`hero banner`} 
                        width={0} 
                        height={0} 
                        sizes='100%' 
                    />
                </div>
            </div>
        </>
    )
}

export default PartnerHeroSection
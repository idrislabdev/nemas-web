"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const HomeHeroNewSection = () => {
    return (
        <div className='home-hero-new-section'>
            <div className='banner-container'>
                <div className='text-area'>
                    <h2>Investasi <span>EMAS</span> Tanpa Batas Dengan <span>NEMAS</span></h2>
                    <Link href={`/produk`}>Beli Emas Sekarang!</Link>
                </div>
                <Image 
                     src={`/images/swipers/mobile-coin.png`}
                    alt={`hero banner`} 
                    width={0} 
                    height={0} 
                    sizes='100%' 
                />
            </div>
        </div>
    )
}

export default HomeHeroNewSection
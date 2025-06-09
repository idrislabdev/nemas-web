"use client"

import ModalPlaystore from '@/@core/components/modals/modal-playstore';
import Image from 'next/image';
import React, { useState } from 'react'


const HomeHeroNewSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className='home-hero-new-section'>
                <div className='banner-container'>
                    <div className='text-area'>
                        <h2>Investasi <span>EMAS</span> Tanpa Batas Dengan <span>NEMAS</span></h2>
                        <a className='cursor-pointer' onClick={() => setIsModalOpen(true)}>Beli Emas Sekarang!</a>
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
            <ModalPlaystore 
                isModalOpen={isModalOpen} 
                setIsModalOpen={setIsModalOpen} 
            />
        </>
    )
}

export default HomeHeroNewSection
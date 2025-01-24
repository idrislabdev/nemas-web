"use client"

import Image from 'next/image';
import React from 'react'

const SimpleHeader = () => {
    return (
        <>
            <header className='simple-header sm:mobile-responsive'>
                <div className='simple-header-top'>
                </div>
                <div className='logo-area'>
                    <Image src={`/images/logo/nemas-white.png`} alt='logo nemas' width={0} height={0} sizes='100%' />
                </div>
            </header>
        </>
    )
}

export default SimpleHeader

"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const SimpleHeader = () => {
    return (
        <>
            <header className='simple-header sm:mobile-responsive md:mobile-responsive'>
                <div className='simple-header-top'>
                </div>
                <Link href={`/`} className='logo-area'>
                    <Image src={`/images/logo/nemas-white.png`} alt='logo nemas' width={0} height={0} sizes='100%' />
                </Link>
            </header>
        </>
    )
}

export default SimpleHeader

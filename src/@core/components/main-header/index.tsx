"use client"

import { Mail01 } from '@untitled-ui/icons-react';
import Image from 'next/image';
import Link from 'next/link'
import React, { useCallback, useEffect } from 'react'

const MainHeader = () => {
   
    const onScroll = useCallback(() => {
        const { scrollY } = window;
        if ( scrollY >= 60) {
            document.getElementsByClassName("main-header-bottom")[0].classList.add('fixed', 'top-0');
        } else {
            if (document.getElementsByClassName("main-header-bottom")[0]) {
                document.getElementsByClassName("main-header-bottom")[0].classList.remove('fixed', 'top-0');
            }
        }

    }, []);


    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
           window.removeEventListener("scroll", onScroll);
        }
    });

    return (
        <>
            <header className='main-header sm:mobile-responsive'>
                <div className='main-header-top'>
                    
                </div>
                <div className='main-header-bottom'>
                    <div className='logo-area'>
                        <Image src={`/images/logo/nemas-white.png`} alt='logo nemas' width={0} height={0} sizes='100%' />
                    </div>
                    <div className='main-header-menu'>
                        <ul>
                            <li><Link href={`/`}>Tabungan Emas</Link></li>
                            <li><Link href={`/`}>Beli Emas</Link></li>
                            <li><Link href={`/`}>Investasi</Link></li>
                            <li><Link href={`/`}>Jual Emas</Link></li>
                            <li><Link href={`/`}>Produk Emas Fisik</Link></li>
                            <li><Link href={`/`}>Tarik Emas</Link></li>
                            <li><Link href={`/`}>Jaminan Emas</Link></li>
                            <li><Link href={`/`}>Kirim Emas Ke Member</Link></li>
                            <li><Link href={`/`}>Tarik Saldo</Link></li>
                        </ul>
                    </div>
                    <div className='login-area'>
                        <label><span><Mail01 /></span></label>
                        <div className='login-menu'>
                            <button>Log In</button>
                            <a>atau <span>Daftar</span> disini</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default MainHeader

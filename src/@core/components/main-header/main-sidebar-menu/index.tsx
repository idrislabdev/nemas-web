"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation';
import { AnnotationQuestion, Bell01, BookClosed, BookOpen01, Box, List, LogIn01, LogOut01, Receipt, User01, X } from '@untitled-ui/icons-react';
import { useGlobals } from '@/@core/hoc/useGlobals';
import Link from 'next/link';
import Image from 'next/image';

const MainSidebarMenu = (props: { show:boolean, setShow: Dispatch<SetStateAction<boolean>> }) => {
    const { show, setShow } = props
    const router = useRouter();
    const { globals } = useGlobals()

    const goToLink = (path:string) => {
        setShow(false)
        document.body.classList.remove('overflow-hidden')
        router.push(`/${path}`)
    }

    const closeSidebar = () => {
        document.body.classList.remove('overflow-hidden')
        setShow(false)
    }

    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    }


    return (
        <>
            <div className={`main-sidebar-overlay ${!show ? '!hidden' : ''}`} onClick={() => closeSidebar()}></div>
            <div className={`main-sidebar-menu ${show ? 'show' : ''}`}>
                <div className='sidebar-menu-top'>
                    <div className='sidebar-header'>
                        <div className='sidebar-header-action'>
                            <a onClick={() => closeSidebar()}><span className='my-icon text-white'><X/></span></a>
                        </div>
                    </div>
                    {globals.userLogin.name &&
                        <div className='login-member'>
                            <Image 
                                src={`/images/default-avatar.jpg`} 
                                alt='logo nemas' 
                                width={0} 
                                height={0} 
                                sizes='100%' 
                            />
                            <div className='member-info'>
                               <p>{globals.userLogin.name}</p>
                               <span>Gold Member</span>
                            </div>
                        </div>
                    }
                    {!globals.userLogin.name &&
                        <div className='login-non-member'>
                            <Link href={`/login`} className='login-button'>
                                <span className='my-icon icon-sm'><LogIn01 /></span>
                                Log In
                            </Link>
                            <Link href={`/register`} className='register-button'>Daftar</Link>
                        </div>
                    }
                    <div className='sidebar-list'>
                        <ul>
                            <li><a onClick={() => goToLink('produk')}><span><Box /></span>Produk Emas Fisik</a></li>
                            <li><a onClick={() => goToLink('berita')}><span><BookOpen01 /></span>News</a></li>
                            <li><a onClick={() => goToLink('fitur-lainnya')}><span><List /></span>Fitur Lainnya</a></li>
                            <li><a onClick={() => goToLink('faq')}><span><AnnotationQuestion /></span>FaQ</a></li>
                            <li><a onClick={() => goToLink('kebijakan-privasi')}><span><BookClosed /></span>Kebijakan dan Privasi</a></li>
                        </ul>
                    </div>
                    <div className='sidebar-list'>
                        <ul>
                            <li><a><span><User01 /></span>Akun Saya</a></li>
                            <li><a><span><Receipt /></span>Transakasi</a></li>
                            <li><a><span><Bell01 /></span>Notifikasi</a></li>
                        </ul>
                    </div>
                </div>
                <div className='sidebar-menu-bottom'>
                    {globals.userLogin.name &&
                        <a onClick={() => logOut()}><span><LogOut01 /></span>Logout</a>
                    }
                </div>
            </div>
        </>
    )
}

export default MainSidebarMenu

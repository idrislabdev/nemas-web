"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation';
import { X } from '@untitled-ui/icons-react';

const MainSidebarMenu = (props: { show:boolean, setShow: Dispatch<SetStateAction<boolean>> }) => {
    const { show, setShow } = props
    const router = useRouter();

    const goToLink = (path:string) => {
        setShow(false)
        document.body.classList.remove('overflow-hidden')
        router.push(`/${path}`)
    }

    const closeSidebar = () => {
        document.body.classList.remove('overflow-hidden')
        setShow(false)
    }


    return (
        <>
            <div className={`main-sidebar-overlay ${!show ? '!hidden' : ''}`} onClick={() => setShow(false)}></div>
            <div className={`main-sidebar-menu ${show ? 'show' : ''}`}>
                <div className='sidebar-menu-top'>
                    <div className='sidebar-header'>
                        <div className='sidebar-header-action'>
                            <a onClick={() => closeSidebar()}><span className='my-icon text-white'><X/></span></a>
                        </div>
                    </div>
                    <div className='sidebar-list'>
                        <ul>
                            <li><a onClick={() => goToLink('')}>Tabungan Emas</a></li>
                            <li><a onClick={() => goToLink('')}>Beli Emas</a></li>
                            <li><a onClick={() => goToLink('')}>Investasi</a></li>
                            <li><a onClick={() => goToLink('')}>Jual Emas</a></li>
                            <li><a onClick={() => goToLink('')}>Produk Emas Fisik</a></li>
                            <li><a onClick={() => goToLink('')}>Tarik Emas</a></li>
                            <li><a onClick={() => goToLink('')}>Kirim Emas Ke Member</a></li>
                            <li><a onClick={() => goToLink('')}>Tarik Saldo</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSidebarMenu

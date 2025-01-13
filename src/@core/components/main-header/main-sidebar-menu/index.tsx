"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const MainSidebarMenu = (props: { lang:string, show:boolean, setShow: Dispatch<SetStateAction<boolean>> }) => {
    const { lang, show, setShow } = props
    const router = useRouter();

    const goToLink = (path:string) => {
        setShow(false)
        document.body.classList.remove('overflow-hidden')
        router.push(`/${lang}/${path}`)
    }

    // const closeSidebar = () => {
    //     document.body.classList.remove('overflow-hidden')
    //     setShow(false)
    // }


    return (
        <>
            <div className={`main-sidebar-overlay ${!show ? '!hidden' : ''}`} onClick={() => setShow(false)}></div>
            <div className={`main-sidebar-menu ${show ? 'show' : ''}`}>
                <div className='sidebar-menu-top'>
                    <div className='sidebar-header'>
                        <div className='sidebar-header-logo'>
                            <a onClick={() => goToLink('')}>
                                <Image src='/images/logoes/logo-unicorp-big.png' alt='logo unicorp' width={128} height={36}/>
                            </a>
                        </div>
                        <div className='sidebar-header-action'>
                            {/* <a onClick={_ => closeSidebar()}><TimesIcon color={'#838899'} /></a> */}
                        </div>
                    </div>
                    <div className='sidebar-list'>
                        <ul>
                            <li><a onClick={() => goToLink('about-us')}>Tentang Kami</a></li>
                            <li><a onClick={() => goToLink('business-units/ijp')}>Unit Bisnis (IJP)</a></li>
                            <li><a onClick={() => goToLink('ebusiness-units/ijsa')}>Unit Bisnis (IJSA)</a></li>
                            {/* <li><a onClick={() => goToLink('news')}>News</a></li> */}
                            <li><a onClick={() => goToLink('careers')}>Karir</a></li>
                            <li><a onClick={() => goToLink('contact-us')}>Kontak Kami</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSidebarMenu

"use client";

import { ChevronRight, File06, Headphones01, HelpCircle, Key01, LineChartUp02, LogOut01, User01 } from '@untitled-ui/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const AkunSidebar = (props: {children:React.ReactNode}) => {
    const { children } = props;
    const pathname = usePathname()
    return (
        <div className='sidebar-container'>
            <ul>
                <li>
                    <Link href={`/akun/pengaturan`}>
                        <span className='my-icon'><User01 />Pengaturan Akun</span>  
                        <span><ChevronRight /></span>
                    </Link>
                    {pathname.split("/")[2] == 'pengaturan' && 
                        <div className='mobile-container'>
                            {children}
                        </div>
                    }
                </li>
                <li>
                    <Link href={`/akun/keamanan`}>
                        <span className='my-icon'><Key01 />Keamanan Akun</span>  
                        <span><ChevronRight /></span>
                    </Link>
                    {pathname.split("/")[2] == 'keamanan' && 
                        <div className='mobile-container'>
                            {children}
                        </div>
                    }
                </li>
                <li>
                    <Link href={`/akun/setting-notifikasi`}>
                        <span className='my-icon'><LineChartUp02 />Setting Notifikasi Harga</span>  
                        <span><ChevronRight /></span>
                    </Link>
                    {pathname.split("/")[2] == 'setting-notifikasi' && 
                        <div className='mobile-container'>
                            {children}
                        </div>
                    }
                </li>
                <li>
                    <Link href={`/akun/bantuan`}>
                        <span className='my-icon'><HelpCircle />Bantuan</span>  
                        <span><ChevronRight /></span>
                    </Link>
                    {pathname.split("/")[2] == 'bantuan' && 
                        <div className='mobile-container'>
                            {children}
                        </div>
                    }
                </li>
                <li>
                    <Link href={`/akun/customer-service`}>
                        <span className='my-icon'><Headphones01 />Customer Service</span>  
                        <span><ChevronRight /></span>
                    </Link>
                    {pathname.split("/")[2] == 'customer-service' && 
                        <div className='mobile-container'>
                            {children}
                        </div>
                    }
                </li>
                <li>
                    <Link href={`/akun/legal`}>
                        <span className='my-icon'><File06 />Legal</span>  
                        <span><ChevronRight /></span>
                    </Link>
                    {pathname.split("/")[2] == 'legal' && 
                        <div className='mobile-container'>
                            {children}
                        </div>
                    }
                </li>
                <li>
                    <a>
                        <span className='my-icon'><LogOut01 />Keluar</span>  
                        <span><ChevronRight /></span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AkunSidebar
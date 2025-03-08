"use client"
import { AtSign, Phone } from '@untitled-ui/icons-react'
import React, { useCallback, useEffect, useState } from 'react'
import FooterFaq from './faq'
import { IFaq } from '@/@core/@types/interface'
import FooterMenu from './menu'
import Link from 'next/link'
import moment from 'moment'
import axiosInstance from '@/@core/utils/axios'

const Footer = () => {
    const year = moment().format("YYYY")
    const [faqs, setFaqs] = useState<IFaq[]>([]);

    const fetchData = useCallback(async () => {
        const resp = await axiosInstance.get(`core/information/educational/?offset=0&limit=5`);
        const { results } = resp.data
        setFaqs(results)
    }, [setFaqs])

    useEffect(() => {
        fetchData()
    }, [fetchData])
    return (
        <>
            <div className='footer sm:mobile-responsive md:mobile-responsive'>
                <div className='footer-wrapper'>
                    <div className='footer-top'>
                            <div className='top-area product'>
                                <h5>Produk &amp; Layanan</h5>
                                <FooterMenu />
                            </div>
                            <div className='top-area information'>
                                <div className='information-area'>
                                    <h5>Informasi</h5>
                                    <Link href={`/berita`}>Artikel Terupdate</Link>
                                </div>
                                <div className='contact-area'>
                                    <h5>Kontak</h5>
                                    <div className='sub-contact-area'>
                                        <a><span className='my-icon'><Phone /></span> <span>+6281234567890</span></a>
                                        <a><span className='my-icon'><AtSign /></span> <span>email@Nemas.com</span></a>
                                    </div>
                                </div>
                            </div>
                            <FooterFaq faqs={faqs} />

                        </div>
                        <div className='footer-bottom'>
                            <h6>Copyright {year}. NEMAS. All rights reserved.</h6>
                        </div>
                </div>
            </div>
        </>
        
    )
}

export default Footer
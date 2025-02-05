
import { AtSign, Phone } from '@untitled-ui/icons-react'
import React from 'react'
import FooterFaq from './faq'
import { getFaqs } from '@/@core/services/api'
import { IFaq } from '@/@core/@types/interface'

const Footer = async () => {
    const respFaq = await getFaqs(0, 5)
    const faqs:IFaq[] = respFaq.data.results
    
    return (
        <div className='footer sm:mobile-responsive'>
           <div className='footer-wrapper'>
            <div className='footer-top'>
                    <div className='top-area product'>
                        <h5>Produk &amp; Layanan</h5>
                        <div className='product-area'>
                            <div className='sub-product'>
                                <a>Tabungan Emas</a>
                                <a>Jual Emas</a>
                                <a>Beli Emas</a>
                                <a>Investasi</a>
                                <a>Emas Fisik</a>
                            </div>
                            <div className='sub-product'>
                                <a>Tabungan Emas</a>
                                <a>Jual Emas</a>
                                <a>Beli Emas</a>
                                <a>Investasi</a>
                                <a>Emas Fisik</a>
                            </div>
                        </div>
                    </div>
                    <div className='top-area information'>
                        <div className='information-area'>
                            <h5>Informasi</h5>
                            <a>Artikel Terupdate</a>
                        </div>
                        <div className='contact-area'>
                            <h5>Kontak</h5>
                            <div className='contact-box'>
                                <span><Phone /></span> <span>+6281234567890</span>
                            </div>
                            <div className='contact-box'>
                                <span><AtSign /></span> <span>email@Nemas.com</span>
                            </div>
                        </div>
                    </div>
                    <FooterFaq faqs={faqs} />

                </div>
                <div className='footer-bottom'>
                    <h6>Copyright 2024. NEMAS. All rights reserved. Designed by Foremost</h6>
                </div>
           </div>
        </div>
    )
}

export default Footer
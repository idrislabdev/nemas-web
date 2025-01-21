"use client"

import { AtSign, ChevronRight, HelpCircle, Phone } from '@untitled-ui/icons-react'
import React, { useRef, useState } from 'react'

const Footer = () => {
    const [selected, setSelected] = useState("1")
    const container1 = useRef(null);
    const container2 = useRef(null);
    const container3 = useRef(null);
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
                    <div className='top-area faq'>
                        <div className='title'>
                            <h5>FAQ</h5>
                            <a className='btn'>Lihat Semua</a>
                        </div>
                        <div className="faq-accordion-white">
                            <ul>
                                <li>
                                    <button type="button" onClick={() => setSelected(selected !== "1" ? "1" : "")}>
                                        <div className="header-button"> 
                                            <div className='button-title'>
                                                <span className='my-icon icon-20'><HelpCircle /></span>
                                                <label>Apa Itu Nemas? </label> 
                                            </div>
                                            <span className={selected == '1' ? 'transform rotate-90' : ''}>
                                                <span className='my-icon icon-sm'><ChevronRight /></span>
                                            </span>
                                        </div>
                                    </button>
                                    <div className={`accordion-content ${selected === "1" ? `max-h-[400px]` : 'max-h-0'}`} ref={container1}>
                                        <div className="content-area">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setSelected(selected !== "2" ? "2" : "")}>
                                        <div className="header-button"> 
                                            <div className='button-title'>
                                                <span className='my-icon icon-20'><HelpCircle /></span>
                                                <label>Apakah Nemas Perusahaan Resmi?</label> 
                                            </div>
                                            <span className={selected == '2' ? 'transform rotate-90' : ''}>
                                                <span className='my-icon icon-sm'><ChevronRight /></span>
                                            </span>
                                        </div>
                                    </button>
                                    <div className={`accordion-content ${selected === "2" ? `max-h-[400px]` : 'max-h-0'}`} ref={container2}>
                                        <div className="content-area">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setSelected(selected !== "3" ? "3" : "")}>
                                        <div className="header-button"> 
                                            <div className='button-title'>
                                                <span className='my-icon icon-20'><HelpCircle /></span>
                                                <label>Apa Saja Fitur Nemas?</label> 
                                            </div>
                                            <span className={selected == '3' ? 'transform rotate-90' : ''}>
                                                <span className='my-icon icon-sm'><ChevronRight /></span>
                                            </span>
                                        </div>
                                    </button>
                                    <div className={`accordion-content ${selected === "3" ? `max-h-[400px]` : 'max-h-0'}`} ref={container3}>
                                        <div className="content-area">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setSelected(selected !== "4" ? "4" : "")}>
                                        <div className="header-button"> 
                                            <div className='button-title'>
                                                <span className='my-icon icon-20'><HelpCircle /></span>
                                                <label>Bagaimana Cara Transaksi di Nemas?</label> 
                                            </div>
                                            <span className={selected == '4' ? 'transform rotate-90' : ''}>
                                                <span className='my-icon icon-sm'><ChevronRight /></span>
                                            </span>
                                        </div>
                                    </button>
                                    <div className={`accordion-content ${selected === "4" ? `max-h-[400px]` : 'max-h-0'}`} ref={container3}>
                                        <div className="content-area">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <h6>Copyright 2024. NEMAS. All rights reserved. Designed by Foremost</h6>
                </div>
           </div>
        </div>
    )
}

export default Footer
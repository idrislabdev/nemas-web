"use client"

import { AtSign, ChevronRight, HelpCircle, Phone } from '@untitled-ui/icons-react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const Footer = () => {
    const [selected, setSelected] = useState("1")
    const container1: any = useRef(null);
    const container2: any = useRef(null);
    const container3: any = useRef(null);
    return (
        <div className='footer'>
            <div className='footer-wrapper'>
                <div className='footer-top'>
                    <h2>Terverifikasi Oleh</h2>
                    <Image src={`/images/logo/kemendag.png`} alt='logo kemendag' width={0} height={0} sizes='100%' />
                </div>
                <div className='footer-bottom w-full'>
                    <div className='bottom-area product w-1/3'>
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
                    <div className='bottom-area information w-1/3'>
                        <h5>Informasi</h5>
                        <a>Artikel Terupdate</a>
                        <div className='contact-area'>
                            <h6>Kontak</h6>
                            <div className='contact-box'>
                                <Phone /> <span>+6281234567890</span>
                            </div>
                            <div className='contact-box'>
                                <AtSign /> <span>email@Nemas.com</span>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-area faq w-1/3'>
                        <div className='title'>
                            <h5>FAQ</h5>
                            <a className='btn'>Lihat Semua</a>
                        </div>
                        <div className="faq-accordion">
                            <ul>
                                <li>
                                    <button type="button" onClick={_ => setSelected(selected !== "1" ? "1" : "")}>
                                        <div className="header-button"> 
                                            <div className='button-title'>
                                                <span><HelpCircle /></span>
                                                <label>Apa Itu Nemas? </label> 
                                            </div>
                                            <span className={selected == '1' ? 'transform rotate-90' : ''}><ChevronRight /></span>
                                        </div>
                                    </button>
                                    <div className={`accordion-content ${selected === "1" ? `max-h-[400px]` : 'max-h-0'}`} ref={container1}>
                                        <div className="content-area">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button type="button" onClick={_ => setSelected(selected !== "2" ? "2" : "")}>
                                        <div className="header-button"> 
                                            <div className='button-title'>
                                                <span><HelpCircle /></span>
                                                <label>Apakah Nemas Perusahaan Resmi?</label> 
                                            </div>
                                            <span className={selected == '2' ? 'transform rotate-90' : ''}><ChevronRight /></span>
                                        </div>
                                    </button>
                                    <div className={`accordion-content ${selected === "2" ? `max-h-[400px]` : 'max-h-0'}`} ref={container2}>
                                        <div className="content-area">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button type="button" onClick={_ => setSelected(selected !== "3" ? "3" : "")}>
                                        <div className="header-button"> 
                                            <div className='button-title'>
                                                <span><HelpCircle /></span>
                                                <label>Apa Saja Fitur Nemas?</label> 
                                            </div>
                                            <span className={selected == '2' ? 'transform rotate-90' : ''}><ChevronRight /></span>
                                        </div>
                                    </button>
                                    <div className={`accordion-content ${selected === "3" ? `max-h-[400px]` : 'max-h-0'}`} ref={container3}>
                                        <div className="content-area">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
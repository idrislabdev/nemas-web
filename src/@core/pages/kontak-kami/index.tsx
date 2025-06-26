"use client"

import { AtSign, Phone } from '@untitled-ui/icons-react'
import React from 'react'
import partners from "./partners.json"
import Image from 'next/image'

const KontakKamiPageWrapper = () => {
    console.log(partners)
    return (
        <main className='kontak-kami-page sm:mobile-responsive md:mobile-responsive'>
            <div className='main-section'>
                <div className='main-container'>
                    <div className='email-form'>
                        <h2>Email</h2>
                        <div className='form-groups'>
                            <div className='form-name'>
                                <label>Nama</label>
                                <div className='input-group'>
                                    <input placeholder='Nama Depan' />
                                    <input placeholder='Nama Belakang' />
                                </div>
                            </div>
                            <div className='form-email-phone'>
                                <label>Email</label>
                                <input placeholder='Masukkan Email' />
                            </div>
                            <div className='form-email-phone'>
                                <label>No Handphone</label>
                                <input placeholder='Masukkan No Handphone' />
                            </div>
                            <div className='form-note'>
                                <div className='label-group'>
                                    <label>Pesan</label>
                                    <span>Kami akan dengan senang hati menjawab semua pertanyaan dan kebutuhan anda mengenai NEMAS</span>
                                </div>
                                 <div className='input-group'>
                                    <textarea placeholder='Masukkan Pesan' />
                                    <span>0 of 6969 max characters</span>
                                </div>
                            </div>
                            <button>Kontak Kami</button>
                        </div>
                    </div>
                    <div className='kontak-partners'>
                        <div className='kontak-info'>
                            <h2>Kontak</h2>
                            <div className='kontak-group'>
                                <a href="tel:+6281234567890" target='_blank'><span className='my-icon'><Phone /></span> <span>+6281234567890</span></a>
                                <a href="mailto:support@nemas.com" target='_blank'><span className='my-icon'><AtSign /></span> <span>support@nemas.com</span></a>
                            </div>
                        </div>
                        <div className='our-partners'>
                            <h2>Our Partners</h2>
                            <div className='partner-list'>
                                {partners.map((item:{url: string, alt:string}, index:number) => (
                                    <div className='card-partner' key={index}>
                                        <div className='img-wrapper'>
                                            <Image src={item.url} alt={item.alt} width={0}  height={0} sizes='100%' />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default KontakKamiPageWrapper
"use client"

import { IFaq } from '@/@core/@types/interface';
import { ChevronRight, HelpCircle } from '@untitled-ui/icons-react';
import Link from 'next/link';
import React, { useState } from 'react'

const FooterFaq = (props: {faqs:IFaq[]}) => {
    const { faqs } = props
    const [selected, setSelected] = useState(0)


    return (
        <div className='top-area faq'>
            <div className='title'>
                <h5>FAQ</h5>
                <Link href={`/faq`} className='btn'>Lihat Semua</Link>
            </div>
            <div className="faq-accordion-white">
                <ul>
                    {faqs.map((item:IFaq, index:number) => (
                        <li key={index}>
                            <button type="button" onClick={() => setSelected(selected != item.information_educational_id ? item.information_educational_id : 0)}>
                                <div className="header-button"> 
                                    <div className='button-title'>
                                        <span className='my-icon icon-20'><HelpCircle /></span>
                                        <label>{item.information_name} </label> 
                                    </div>
                                    <span className={selected == item.information_educational_id ? 'transform rotate-90' : ''}>
                                        <span className='my-icon icon-sm'><ChevronRight /></span>
                                    </span>
                                </div>
                            </button>
                            <div className={`accordion-content ${selected === item.information_educational_id ? `max-h-[400px]` : 'max-h-0'}`}>
                                <div className="content-area">
                                    <p>{item.information_notes}</p>
                                </div>
                            </div>
                        </li>
                    ))

                    }
                    
                </ul>
            </div>
        </div>
    )
}

export default FooterFaq
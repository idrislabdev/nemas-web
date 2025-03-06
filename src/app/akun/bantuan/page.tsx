"use client";

import { IFaq } from '@/@core/@types/interface';
import axiosInstance from '@/@core/utils/axios';
import { ChevronRight, HelpCircle } from '@untitled-ui/icons-react'
import React, { useCallback, useEffect, useState } from 'react'

const UserBantuanPage = () => {
     const [selected, setSelected] = useState(0)
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
        <div className='bantuan-legal-sub-container'>
            <div className='header-area'>
                <h5>Bantuan</h5>
                <a href={`/faqs`} target='_blank'>Lihat semua</a>
            </div>
            <div className="faq-accordion">
                <ul>
                   {faqs.map((item, index:number) => (
                        <li key={index}>
                            <button type="button" onClick={() => setSelected(selected != 1? 1: 0)}>
                                <div className="header-button"> 
                                    <div className='button-title'>
                                        <span className='my-icon icon-20'><HelpCircle /></span>
                                        <label>{item.information_name}</label> 
                                    </div>
                                    <span className={selected == 1 ? 'transform rotate-90' : ''}>
                                        <span className='my-icon icon-sm'><ChevronRight /></span>
                                    </span>
                                </div>
                            </button>
                            <div className={`accordion-content ${selected === 1? `max-h-[400px]` : 'max-h-0'}`}>
                                <div className="content-area">
                                    <p>
                                        {item.information_notes}
                                    </p>
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

export default UserBantuanPage
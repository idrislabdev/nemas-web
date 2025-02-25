"use client"
import { IFaq } from '@/@core/@types/interface'
import { ChevronRight, HelpCircle } from '@untitled-ui/icons-react'
import React, { useState } from 'react'

const FaqAccordion = (props: {item:IFaq}) => {
    const { item } = props;
    const [selected, setSelected] = useState(0)
    
    return (
        <div className="faq-accordion-white">
            <ul>
                <li>
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
            </ul>
        </div>
    )
}

export default FaqAccordion
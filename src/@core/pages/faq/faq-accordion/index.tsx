"use client"
import { ChevronRight, HelpCircle } from '@untitled-ui/icons-react'
import React, { useState } from 'react'

const FaqAccordion = () => {
    const [selected, setSelected] = useState(0)
    
    return (
        <div className="faq-accordion-white">
            <ul>
                <li>
                    <button type="button" onClick={() => setSelected(selected != 1? 1: 0)}>
                        <div className="header-button"> 
                            <div className='button-title'>
                                <span className='my-icon icon-20'><HelpCircle /></span>
                                <label>Syarat dan Ketentuan</label> 
                            </div>
                            <span className={selected == 1 ? 'transform rotate-90' : ''}>
                                <span className='my-icon icon-sm'><ChevronRight /></span>
                            </span>
                        </div>
                    </button>
                    <div className={`accordion-content ${selected === 1? `max-h-[400px]` : 'max-h-0'}`}>
                        <div className="content-area">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                                laborum
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default FaqAccordion
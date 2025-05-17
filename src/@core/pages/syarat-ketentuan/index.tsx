"use client"

import React, { Fragment, useState } from 'react'
import syarat_ketentuan from './syarat_ketentuan'
import { CheckSquareBroken, ChevronRight, Disc01 } from '@untitled-ui/icons-react'
const SyaratKetentuanPageWrapper = () => {
    const [ syarats, setSyarats] = useState(syarat_ketentuan);

    const onChangeShow = (index:number) => {
        const temp = [...syarats]
        const check = syarats.find((x) => x.id == index)
        if (check) {
            check.show  = !check.show 
        }
        setSyarats(temp)
    }

    return (
        <main className='syarat-ketentuan-page sm:mobile-responsive md:mobile-responsive'>
            <div className='header-container'>
                <h2>Syarat Dan Ketentuan</h2>
            </div>
            <div className='main-container flex flex-col'>
                <div className="faq-accordion">
                        <ul className='!border-gray-200 !rounded-[4px]'>
                            {syarat_ketentuan.map((item, index:number) => (
                                <li key={index}>
                                    <button type="button" onClick={() => onChangeShow(item.id)}>
                                        <div className="header-button"> 
                                            <div className='button-title !gap-[8px]'>
                                                <span className='!text-[14px]/[21px] w-[20px]'>{item.id}.</span>
                                                <label className='!text-[14px]/[21px]'>{item.title}</label> 
                                            </div>
                                            <span className={item.show ? 'transform rotate-90' : ''}>
                                                <span className='my-icon icon-sm'><ChevronRight /></span>
                                            </span>
                                        </div>
                                    </button>
                                    <div className={`accordion-content ${item.show? `max-h-[800px]` : 'max-h-0'}`}>
                                        <div className="content-area">
                                            {item.contents.length == 1 && !item.contents[0].subs &&
                                                <p className='text-justify !text-[13px]/[17px]'>{item.contents[0].text}</p>
                                            }
                                            {item.contents.length >= 1 &&
                                                <ul className='text-sm !border-0 flex flex-col gap-[4px]' key={`ul.${index}`} >
                                                    {item.contents.map((item2, index2:number)=> (
                                                        <Fragment key={`${index}.${index2}`} >
                                                            <li key={`${index}.${index2}`} className='flex gap-[8px] !border-t-0'>
                                                                <span className='my-icon icon-xs'><CheckSquareBroken /></span>
                                                                <p className='text-justify !text-[13px]/[17px]'>{item2.text}</p>
                                                            </li>
                                                            {item2.subs &&
                                                                <ul className='text-sm !border-0 flex flex-col gap-[4px]' key={`ul.${index}.${index2}`}>
                                                                    {item2.subs.map((item3, index3:number) => (
                                                                        <li className='flex gap-[8px] !border-t-0' key={`${index}.${index2}.${index3}`}>
                                                                            <span className='my-icon icon-xs'><Disc01 /></span>
                                                                            <p className='text-justify !text-[13px]/[17px]'>{item3.text}</p>
                                                                        </li>
                                                                    ))}
                                                                </ul>

                                                            }
                                                        </Fragment>
                                                    ))}
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                </li>
                            ))

                            }
                        </ul>
                </div>
            </div>
        </main>
    )
}

export default SyaratKetentuanPageWrapper
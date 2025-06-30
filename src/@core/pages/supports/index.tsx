import React from 'react'
import { panduan } from './supports'
import { IPanduan, IPanduanLevel1, IPanduanLevel2 } from '@/@core/@types/interface'

const SupportsPageWrapper = () => {
    return (
        <main className='supports-page sm:mobile-responsive md:mobile-responsive'>
            <div className='main-section'>
                <div className='header-container'>
                    <h2>Panduan Aplikasi Nemas</h2>
                </div>
                <div className='content-container'>
                    <div className='panduan-list'>
                        <ul>
                            {panduan.map((item:IPanduan, index:number)=> (
                                <li key={index}>
                                    <a href={`#content${index+1}`}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='panduan-contents'>
                        {panduan.map((panduan:IPanduan, index:number) => (
                            <div className='panduan' key={index} id={`content${index+1}`}>
                                <h5>{panduan.title}</h5>
                                <hr />
                                <p>{panduan.description}</p>
                                <div className='panduan-level-1'>
                                    {panduan.contents && panduan.contents.map((level_1:IPanduanLevel1, index2:number) =>
                                        <div className='panduan' key={`${index}-${index2}`}>
                                            <p>{level_1.title}</p>
                                             {level_1.subs && level_1.subs.map((level_1_sub:IPanduanLevel2, index3:number) => (
                                                <div className='panduan subs'  key={`${index}-${index2}-${index3}`}>
                                                    <p>{index3+1}. {level_1_sub.title}</p>
                                                     <ul>
                                                        {level_1_sub.contents && level_1_sub.contents.map((content:string, index4:number) => (
                                                            <li key={`${index}-${index2}-${index3}${index4}`}>{content}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SupportsPageWrapper
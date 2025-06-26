import Image from 'next/image'
import React from 'react'
import partners from "./partners.json"

const PartnerPartnersSection = () => {
  return (
    <div className='partner-partners-section'>
        <div className='main-container'>
            <h2>Our Partner</h2>
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
  )
}

export default PartnerPartnersSection
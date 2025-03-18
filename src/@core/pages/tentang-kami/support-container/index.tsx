"use client"
import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

const TentangKamiSupportContainer = () => {
  return (
    <div className='support-container'>
        <Marquee>
            <Image src='/images/bappebti.png' className='bappebti' alt='cnbc logo' width={0} height={0} sizes='100%'/>
            <Image src='/images/fintech-indonesia.png' className='fintech' alt='cnbc logo' width={0} height={0} sizes='100%'/>
            <Image src='/images/pse.png' className='pse' alt='cnbc logo' width={0} height={0} sizes='100%'/>
            <Image src='/images/iso-9001_2.png' className='iso-9001' alt='cnbc logo' width={0} height={0} sizes='100%'/>
            <Image src='/images/iso-27001.png' className='iso-27001' alt='cnbc logo' width={0} height={0} sizes='100%'/>
        </Marquee>
    </div>
  )
}

export default TentangKamiSupportContainer
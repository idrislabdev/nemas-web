import { ChevronUp } from '@untitled-ui/icons-react'
import React from 'react'

const HomeGoldNavigationSection = () => {
  return (
    <div className='home-gold-navigation-section'>
        <ul className='gold-navigation'>
            <li className='active'>Tabungan Emas</li>
            <li>Saldo Uang</li>
            <li>Jaminan Emas</li>
        </ul>
        <div className='gold-info'>
            <div className='info-area'>
                <label>Harga Jual</label>
                <p>Rp 0.0 <span><ChevronUp /> 5%</span></p>
            </div>
            <div className='info-area'>
                <label>Harga Beli</label>
                <p>Rp 0.0 <span><ChevronUp /> 5%</span></p>
            </div>
        </div>
    </div>
  )
}

export default HomeGoldNavigationSection
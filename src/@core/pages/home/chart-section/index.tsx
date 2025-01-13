"use client"

import ChartSpline from '@/@core/components/charts/spline'
import { Input } from 'antd'
import React, { useEffect, useState } from 'react'

const HomeChartSection = () => {
    const [buySell, setBuySell] = useState("buy")
    useEffect(() => {
        console.log(buySell)
    }, [buySell])
    return (
        <div className='home-chart-section'>
            <div className='chart-container'>
                <div className='header-info'>
                    <h5>Grafik Harga</h5>
                    <div className='header-tabs'>
                        <div className="switches-container">
                            <input type="radio" id="switchMonthly" name="switchPlan" value="buy" checked={buySell == 'buy' ? true : false} onChange={(e) => setBuySell(e.target.value)}/>
                            <input type="radio" id="switchYearly" name="switchPlan" value="sell" checked={buySell == 'sell' ? true : false} onChange={(e) => setBuySell(e.target.value)}/>
                            <label htmlFor="switchMonthly">Harga Beli</label>
                            <label htmlFor="switchYearly">Harga Jual</label>
                            <div className="switch-wrapper">
                                <div className="switch">
                                    <div>Harga Beli</div>
                                    <div>Harga Jual</div>
                                </div>
                            </div>
                        </div>
                        <ul className='tabs-day'>
                            <li className='active'>1D</li>
                            <li>1M</li>
                            <li>3M</li>
                            <li>Custom</li>
                        </ul>
                    </div>
                </div>
                <div className='price-info'>
                    <p>Rp 1.351.840 <span>/ gram</span></p>
                </div>
                <div className='chart'>
                    <ChartSpline />
                </div>
            </div>
            <div className='form-container'>
                <div className='form-title'>
                    <div className='subtitle'>
                        <label>Harga Beli Emas</label>
                        <p>Rp 1.351.840  <span>/ gram</span></p>
                    </div>
                    <div className='subtitle'>
                        <label>Harga Jual Emas</label>
                        <p>Rp 1.251.840  <span>/ gram</span></p>
                    </div>
                </div>
                <div className='form-input'>
                    <Input size='large'/>
                    <span>=</span>
                    <Input size='large' />
                </div>
                <div className='form-footer'>
                    <button>Beli Emas Sekarang!</button>
                </div>
            </div>
        </div>
    )
}

export default HomeChartSection
"use client"

import { IGoldPrice } from '@/@core/@types/interface'
import ChartSpline from '@/@core/components/charts/spline'
import axiosInstance from '@/@core/utils/axios'
import { formatterNumber } from '@/@core/utils/general'
import React, { useEffect, useState } from 'react'

const HomeChartSection = () => {
    const [buySell, setBuySell] = useState("buy")
    const [dataGold, setDataGold] = useState<IGoldPrice>({} as IGoldPrice)
    useEffect(() => {
        axiosInstance.get(`/core/gold/price/active`)
        .then((response) => {
            const data = response.data
            setDataGold(data)
        })
    }, [buySell])
    return (
        <div className='home-chart-section'>
            <div className='navigation-container'>
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
                    {buySell == 'buy' &&  <p>Rp {formatterNumber(dataGold.gold_price_buy ? dataGold.gold_price_buy : 0)} <span>/ gram</span></p> }
                    {buySell == 'sell' &&  <p>Rp {formatterNumber(dataGold.gold_price_sell ? dataGold.gold_price_sell : 0)} <span>/ gram</span></p> }
                </div>
            </div>
            <div className='chart-container'>
                <div className='chart'>
                    <ChartSpline />
                </div>
            </div>
        </div>
    )
}

export default HomeChartSection
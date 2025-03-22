"use client"

import { IGoldPrice } from '@/@core/@types/interface'
import ChartSpline from '@/@core/components/charts/spline'
import axiosInstance from '@/@core/utils/axios'
import { formatterNumber } from '@/@core/utils/general'
import {ArrowNarrowDownRight, InfoCircle } from '@untitled-ui/icons-react'
import React, { useEffect, useState } from 'react'

const HomeChartNewSection = () => {
    const [dataGold, setDataGold] = useState<IGoldPrice>({} as IGoldPrice)
    useEffect(() => {
        axiosInstance.get(`/core/gold/price/active`)
        .then((response) => {
            const data = response.data
            setDataGold(data)
        })
    }, [setDataGold])
    return (
        <div className='home-chart-new-section'>
            <div className='navigation-container'>
                <div className='header-info'>
                    <h5>Harga Emas Saat Ini </h5>
                    <span>2.5% <span><InfoCircle /></span></span>
                </div>
                <div className='price-info'>
                    <p>Rp {formatterNumber(dataGold.gold_price_buy ? dataGold.gold_price_buy : 0)} <span>/ 1 gr</span></p>
                    <span className='badge danger'><span><ArrowNarrowDownRight /></span>-0,05%</span>
                </div>
                <div className='header-tabs'>
                    <ul className='tabs-day'>
                        <li className='active'>Day</li>
                        <li>Week</li>
                        <li>Month</li>
                    </ul>
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

export default HomeChartNewSection
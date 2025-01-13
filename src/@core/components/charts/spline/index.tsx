"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import HC_rounded from "highcharts-rounded-corners";

const options = {
    chart: {
        type: 'area',
    },
    title: {
        text: '',
        align: 'left',
        x: 30,
        y: 30,
        style : {
            color: '#1B2559',
            fontSize: '16px',
        }
    },
    colors: ['#064D81'],
    xAxis: {
        categories: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
        visible: false,
        min: 0.5, 
        max: 5.5,
        crosshair: {
            width: 1,
            color: '#0A0A07',
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: true
        },
        visible: false
    },
    plotOptions: {

    },
    series: [],
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    }
}
const ChartSpline = () => {
    const [ data, setData ] = useState({})
    const fetchData = useCallback(() => {
        const temp = JSON.parse(JSON.stringify(options));
        temp.chart.type = 'areaspline'
        temp.plotOptions = {
            series: {
                marker: false,
                fillColor: {
                    linearGradient: [0, 0, 0, 300],
                    stops: [
                        [0, Highcharts.color('#39BFB6').setOpacity(1).get('rgba')],
                        [1, Highcharts.color('#B1F8B900').setOpacity(0.3).get('rgba')],
                    ]
                }
            }
        }
        temp.series  = [
            {
                name: 'A',
                data: [3000, 4000, 3500, 4500, 4600, 1500, 2900],
                color: '#04FF00',
                fillColor: {
                    linearGradient: [0, 0, 0, 200],
                    stops: [
                        [0, Highcharts.color('#39BFB6').setOpacity(1).get('rgba')],
                        [1, Highcharts.color('#B1F8B900').setOpacity(0.3).get('rgba')],
                    ]
                }
            },
        ]
        setData(temp)
    }, [setData])

    useEffect(() => {
        fetchData();
    }, [fetchData])
    useEffect(() => {
        // HC_rounded(Highcharts)
    })
  return (
    <HighchartsReact
        highcharts={Highcharts}
        options={data}
        containerProps = {{ className: 'w-full h-[272px]' }}
    />
  )
}

export default ChartSpline
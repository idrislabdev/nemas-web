"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import HC_rounded from "highcharts-rounded-corners";

const options = {
    chart: {
        type: 'areaspline',
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
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        min: 0.5, 
        max: 5.5,
        crosshair: {
            width: 1,
            color: '#0A0A07',
        },
        opposite:true,
        tickInterval: 1,
        tickmarkPlacement: "on",
        gridLineWidth: 1,
        gridLineColor: "#bbbbbb",
        gridLineDashStyle: "dash",
        lineColor: "#000",
        lineWidth: 0,
        minorTickInterval: 0.5,
        minorGridLineColor: "#dddddd",
        minorGridLineDashStyle: "dash",
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
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    const fetchData = useCallback(() => {
        const temp = JSON.parse(JSON.stringify(options));
        temp.chart.type = 'areaspline'
        temp.plotOptions = {
            series: {
                marker: false,
                fillColor: {
                    linearGradient: [0, 0, 0, 300],
                    stops: [
                        [0, Highcharts.color('#3ABFB6').setOpacity(1).get('rgba')],
                        [1, Highcharts.color('#D9D9D900').setOpacity(0.3).get('rgba')],
                    ]
                }
            }
        }
        temp.series  = [
            {
                name: 'A',
                data: [3000, 4000, 3500, 4500, 4600, 1500, 2900],
                color: '#3ABFB6',
                lineWidth: 3,
                fillColor: {
                    linearGradient: [0, 0, 0, 200],
                    stops: [
                        [0, Highcharts.color('#3ABFB6').setOpacity(1).get('rgba')],
                        [1, Highcharts.color('#D9D9D900').setOpacity(0.3).get('rgba')],
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
    useEffect(()=> {
        window.addEventListener('resize', ()=> {
            Highcharts.charts.forEach(chart => {
                if (chart) {
                    // console.log(chart)
                    // chart.redraw()
                }
            });

        })
    }, [])
  return (
    <HighchartsReact
        highcharts={Highcharts}
        options={data}
        containerProps = {{ className: 'w-full' }}
        ref={chartComponentRef}
    />
  )
}

export default ChartSpline
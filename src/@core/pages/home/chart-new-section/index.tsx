'use client';

import { IGoldPrice, IUserProp } from '@/@core/@types/interface';
import ChartSpline from '@/@core/components/charts/spline';
import axiosInstance from '@/@core/utils/axios';
import { formatterNumber } from '@/@core/utils/general';
import {
  ArrowNarrowDownRight,
  ArrowNarrowUpRight,
  InfoCircle,
} from '@untitled-ui/icons-react';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { Tooltip } from 'antd';

const HomeChartNewSection = (props: { userProps: IUserProp }) => {
  const { userProps } = props;
  const [dataGold, setDataGold] = useState<IGoldPrice>({} as IGoldPrice);
  const [tabActive, setTabActive] = useState('daily');
  const [dataChart, setDataChart] = useState<{
    categories: string[];
    data: number[];
  }>({} as { categories: []; data: [] });
  const [avgPercentage, setAvgPercentage] = useState(0);

  const fetchDataChart = useCallback(() => {
    axiosInstance
      .get(`/reports/gold-chart/${tabActive}/?format=json`)
      .then((response) => {
        const data = response.data;
        const categories: string[] = [];
        const dataVal: number[] = [];
        data.forEach(
          (item: { hour: string; gold_price_buy: number; day: string }) => {
            if (tabActive == 'daily') {
              categories.push(moment(item.hour).format('HH'));
            } else if (tabActive == 'weekly') {
              categories.push(moment(item.day).format('DD/MM'));
            } else if (tabActive == 'monthly') {
              categories.push(moment(item.day).format('DD/MM'));
            }
            dataVal.push(item.gold_price_buy);
          }
        );
        setDataChart({ categories: categories, data: dataVal });
        // setDataGold(data)
      });
  }, [tabActive]);

  useEffect(() => {
    if (userProps.user_id) {
      axiosInstance
        .get(`/reports/gold-transactions/avg?user_id=${userProps.user_id}`)
        .then((response) => {
          const data = response.data;
          setAvgPercentage(data.avg_pct);
        });
    }
  }, []);

  useEffect(() => {
    axiosInstance.get(`/core/gold/price/active`).then((response) => {
      const data = response.data;
      setDataGold(data);
    });
  }, [setDataGold]);

  useEffect(() => {
    fetchDataChart();
  }, [fetchDataChart]);

  return (
    <div className="home-chart-new-section">
      <div className="navigation-container">
        <div className="header-info">
          <h5>Harga Emas Saat Ini </h5>

          <Tooltip
            title={`Fee adalah biaya pada saat menjual aset. Harga jual saat ini dipotong fee Rp${
              dataGold.gold_price_buy
                ? formatterNumber(
                    Math.round(
                      dataGold.gold_price_buy - dataGold.gold_price_buy * 0.025
                    )
                  )
                : 0
            }`}
          >
            <span style={{ cursor: 'pointer' }}>
              2.5%{' '}
              <span>
                <InfoCircle />
              </span>
            </span>
          </Tooltip>
        </div>
        <div className="price-info">
          <p>
            Rp{' '}
            {formatterNumber(
              dataGold.gold_price_buy ? Math.round(dataGold.gold_price_buy) : 0
            )}{' '}
            <span>/ 1 gr</span>
          </p>
          {userProps.name && (
            <span
              className={`badge ${avgPercentage > 0 ? 'primary' : 'danger'}`}
            >
              {avgPercentage < 0 && (
                <span>
                  <ArrowNarrowDownRight />
                </span>
              )}
              {avgPercentage > 0 && (
                <span>
                  <ArrowNarrowUpRight />
                </span>
              )}
              {avgPercentage}%
            </span>
          )}
        </div>
        <div className="header-tabs">
          <ul className="tabs-day">
            <li
              className={tabActive == 'daily' ? 'active' : ''}
              onClick={() => setTabActive('daily')}
            >
              Day
            </li>
            <li
              className={tabActive == 'weekly' ? 'active' : ''}
              onClick={() => setTabActive('weekly')}
            >
              Week
            </li>
            <li
              className={tabActive == 'monthly' ? 'active' : ''}
              onClick={() => setTabActive('monthly')}
            >
              Month
            </li>
          </ul>
        </div>
      </div>
      <div className="chart-container">
        <div className="chart">
          <ChartSpline dataChart={dataChart} />
        </div>
      </div>
    </div>
  );
};

export default HomeChartNewSection;

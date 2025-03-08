"use client"

import { IGoldPrice, IUserProp } from '@/@core/@types/interface'
import { useGlobals } from '@/@core/hoc/useGlobals'
import axiosInstance from '@/@core/utils/axios'
import { formatterNumber } from '@/@core/utils/general'
import { Asterisk01, Eye, EyeOff } from '@untitled-ui/icons-react'
import React, { useEffect, useState } from 'react'

const HomeGoldNavigationSection = () => {
    const [dataGold, setDataGold] = useState<IGoldPrice>({} as IGoldPrice)
    const [hiddenEye, setHiddenEye] = useState(true);
    const [hiddenEyeSaldo, setHiddenEyeSaldo] = useState(true);
    const [navigation, setNavigation] = useState('saving');
    const [userProp, setUserProp] = useState({} as IUserProp)
    const [stateDone, setStateDone] = useState(false)
    const { globals } = useGlobals()
    
    useEffect(() => {
        axiosInstance.get(`/core/gold/price/active`)
        .then((response) => {
            const data = response.data
            setDataGold(data)
        })
    }, [setDataGold])


    useEffect(() => {
        if (!stateDone) {
            const userProp:IUserProp = JSON.parse(localStorage.getItem("user_prop") || "{}")
            setUserProp(userProp)
            setStateDone(true)
        }
    },[stateDone, setStateDone])
    return (
        <div className='home-gold-navigation-section'>
            <ul className='gold-navigation'>
                <li className={`${navigation == 'saving' ? 'active': ''}`}>
                    <a onClick={() => setNavigation('saving')}>Tabungan Emas</a>
                </li>
                <li className={`${navigation == 'saldo' ? 'active': ''}`}>
                    <a onClick={() => setNavigation('saldo')}>Saldo Uang</a>
                </li>
                {/* <li>Jaminan Emas</li> */}
            </ul>
            <div className='gold-area'>
                {userProp.gold_wgt && navigation == 'saving' &&
                    <div className='gold-saving'>
                        <div className='info-saving'>
                            <h5>Tabungan Emas Saat Ini</h5>
                            <div className='detail-saving'>
                                {hiddenEye &&
                                <div className='hidden-saving'>
                                    <Asterisk01/>
                                    <Asterisk01/>
                                    <Asterisk01/>
                                    <Asterisk01/>
                                    <Asterisk01/>
                                    <Asterisk01/>
                                    <Asterisk01/>
                                </div>
                                }
                                {!hiddenEye &&
                                    <p>{globals.userProp.gold_wgt} gram</p>
                                }
                                <a onClick={() => setHiddenEye(!hiddenEye)}>
                                    {hiddenEye && <Eye />}
                                    {!hiddenEye && <EyeOff />}
                                </a>
                            </div>
                        </div>
                        <a>Detail Asset</a>
                    </div>
                }
                {userProp.gold_wgt && navigation == 'saldo' &&
                    <div className='gold-saving'>
                        <div className='info-saving'>
                            <h5>Saldo Uang Saat Ini</h5>
                            <div className='detail-saving'>
                                {hiddenEyeSaldo &&
                                <div className='hidden-saving'>
                                    <Asterisk01/>
                                    <Asterisk01/>
                                    <Asterisk01/>
                                    <Asterisk01/>
                                    <Asterisk01/>
                                    <Asterisk01/>
                                    <Asterisk01/>
                                </div>
                                }
                                {!hiddenEyeSaldo &&
                                    <p>Rp{globals.userProp.wallet_amt}</p>
                                }
                                <a onClick={() => setHiddenEyeSaldo(!hiddenEyeSaldo)}>
                                    {hiddenEyeSaldo && <Eye />}
                                    {!hiddenEyeSaldo && <EyeOff />}
                                </a>
                            </div>
                        </div>
                        <a>Detail Asset</a>
                    </div>
                }
                <div className='gold-info'>
                    <div className='info-area'>
                        <label>Harga Jual</label>
                        <p>Rp{formatterNumber(dataGold.gold_price_sell ? dataGold.gold_price_sell : 0)}<span></span></p>
                    </div>
                    <div className='info-area'>
                        <label>Harga Beli</label>
                        <p>Rp{formatterNumber(dataGold.gold_price_buy ? dataGold.gold_price_buy : 0)}<span></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeGoldNavigationSection
"use client"

import { IGoldPrice, IUserProp } from '@/@core/@types/interface'
import ModalPlaystore from '@/@core/components/modals/modal-playstore'
import { useGlobals } from '@/@core/hoc/useGlobals'
import axiosInstance from '@/@core/utils/axios'
import { formatterNumber, formatterNumber2 } from '@/@core/utils/general'
import { User03 } from '@untitled-ui/icons-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const HomeUserProfileSection = () => {
    const [dataGold, setDataGold] = useState<IGoldPrice>({} as IGoldPrice)
    const [userProp, setUserProp] = useState({} as IUserProp)
    const [stateDone, setStateDone] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
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
        <>
            <div className='home-user-profile-section'>
                <div className='profile-container'>
                    <span><User03/></span>
                    <div className='profile-desc'>
                        <h5>Hi, {userProp.name}</h5>
                        <p>Siap untuk menabung emas hari ini?</p>
                    </div>
                </div>
                <div className='savings-container'>
                    <div className='saving-card golds'>
                        <Image src={`/images/golds.png`}  alt='golds' width={0} height={0} sizes='100%' />
                        <div className='description'>
                            <h5>Tabungan Emas</h5>
                            <p>{globals.userProp.gold_wgt.replace(".", ",")} Gram</p>
                            <span>≈Rp{formatterNumber2(((parseFloat(globals.userProp.gold_wgt)) * (dataGold.gold_price_sell ? dataGold.gold_price_sell : 0)).toFixed(3).toString().replace(".", ","))}</span>
                        </div>
                    </div>
                    <div className='saving-card gold-money'>
                        <Image src={`/images/gold-money.png`} alt='gold and money' width={0} height={0} sizes='100%' />
                        <div className='description'>
                            <h5>Saldo Uang</h5>
                            <p>Rp {formatterNumber(parseInt(globals.userProp.wallet_amt))}</p>
                            <button onClick={() => setIsModalOpen(true)}>Topup Saldo</button>
                        </div>
                    </div>
                </div>
            </div>
                <ModalPlaystore 
                    isModalOpen={isModalOpen} 
                    setIsModalOpen={setIsModalOpen} 
                />
        </>
    )
}

export default HomeUserProfileSection
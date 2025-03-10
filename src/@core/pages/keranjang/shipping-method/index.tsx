"use client"
import { DeliveryTrucIcon } from '@/@core/components/custom-icons'
import { ChevronRight, InfoCircle } from '@untitled-ui/icons-react'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import ModalShipment from './modal-shipment'
import axiosInstance from '@/@core/utils/axios'
import { IShippingService } from '@/@core/@types/interface'
import { formatterNumber } from '@/@core/utils/general'

const KeranjangShipping = (props: {
    setView:Dispatch<SetStateAction<string>>,
    summary:number,
    totalWeight:number,
}) => {
    const { setView, summary, totalWeight } = props;
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ shippingServices, setShippingServices] = useState<IShippingService[]>([] as IShippingService [])
    const [ selectedService, setSelectedService ] = useState<IShippingService>({} as IShippingService)

    const fetchData = useCallback(async () => {
        const body = {
            amount: summary,
            weight: totalWeight
        }
        const resp = await axiosInstance.post(`order/shipping/service/`, body);
        const { data } = resp.data
        setShippingServices(data.services)
       
    }, [summary, totalWeight])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <>
            <div className='header-section'>
                <h2>Metode Pengiriman</h2>
            </div>
            <div className='main-shipping-section'>
                <div className='main-container'>
                    <div className='payment-type'>
                        <Image 
                            src={`/images/courier.png`}
                            alt='courier' 
                            width={0} 
                            height={0} 
                            sizes='100%' 
                        />
                        <p>Pengiriman by Kurir</p>
                    </div>
                    <p className='text-notice'>
                        Isi alamat tujuan dan pilihlah 
                        ekspedisi untuk pengiriman
                    </p>
                    <div className='text-address'>
                        <div className='title'>
                            <label>Alamat Pengiriman</label>
                            <a>Ubah Alamat</a>
                        </div>
                        <input />
                    </div>
                    <div className='shipment-type'>
                        <h5 className='title'>Jasa Pengiriman</h5>
                        <hr />
                        <div className='shipment-info'>
                            <div className='shipment-recomendation'>
                                <InfoCircle />
                                <div className='text-recomendation'>
                                    <label>Jasa ekspedisi yang direkomendasikan</label>
                                    <span>J&amp;T</span>
                                </div>
                            </div>
                            <a onClick={() => setIsModalOpen(true)}>
                                <span className='text'><DeliveryTrucIcon />
                                    {!selectedService.service_type_code &&
                                        `Pilih Ekspedisi`
                                    }
                                    {selectedService.service_type_code &&
                                        `${selectedService.service_type_code} - Rp${formatterNumber(selectedService.total_cost)}`
                                    }

                                </span>
                                <span className='icon'><ChevronRight /></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='footer-container'>
                    <div className='summary-info'>
                        <label>Total Pembayaran</label>
                        <p>Rp 5,136,000</p>
                    </div>
                    <button onClick={() => setView('payment')}>Konfirmasi Pesanan</button>
                </div>
            </div>
            <ModalShipment 
                isModalOpen={isModalOpen} 
                setIsModalOpen={setIsModalOpen} 
                shippingServices={shippingServices}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
            />
        </>
    )
}

export default KeranjangShipping
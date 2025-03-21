"use client"
import { DeliveryTrucIcon } from '@/@core/components/custom-icons'
import { ChevronRight } from '@untitled-ui/icons-react'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import ModalShipment from './modal-shipment'
import axiosInstance from '@/@core/utils/axios'
import { IOrder, IShippingService } from '@/@core/@types/interface'
import { formatterNumber } from '@/@core/utils/general'

const KeranjangShipping = (props: {
    setView:Dispatch<SetStateAction<string>>,
    summary:number,
    totalWeight:number,
    order:IOrder,
    setOrder:Dispatch<SetStateAction<IOrder>>,
}) => {
    const { setView, summary, totalWeight, order, setOrder } = props;
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

    const onConfirmShipping = () => {
        setOrder({...order, 
            order_tracking_insurance: selectedService.insurance_cost.toString(),
            order_tracking_packing: selectedService.packing_cost.toString(),
            order_tracking_insurance_admin: selectedService.insurance_admin_cost.toString(),
            order_tracking_total: selectedService.total_cost.toString(),
            order_total_price: (summary + selectedService.total_cost + parseInt(order.order_admin_amount)).toString()
        })
        setView('payment')
    } 

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
                        <input value={order.order_pickup_address} onChange={(e) => setOrder({...order, order_pickup_address: e.target.value})} />
                    </div>
                    <div className='shipment-type'>
                        <h5 className='title'>Jasa Pengiriman</h5>
                        <hr />
                        <div className='shipment-info'>
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
                        <p>Rp {formatterNumber(summary)}</p>
                    </div>
                    <button onClick={() => onConfirmShipping()}>Konfirmasi Pesanan</button>
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
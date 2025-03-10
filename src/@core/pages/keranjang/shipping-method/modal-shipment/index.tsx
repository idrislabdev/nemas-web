import { IShippingService } from '@/@core/@types/interface'
import { formatterNumber } from '@/@core/utils/general'
import { X } from '@untitled-ui/icons-react'
import { Modal } from 'antd'
import React, { Dispatch, SetStateAction, useState } from 'react'

const ModalShipment =(props: {
        isModalOpen:boolean, 
        setIsModalOpen:Dispatch<SetStateAction<boolean>>, 
        shippingServices:IShippingService[],
        selectedService:IShippingService,
        setSelectedService:Dispatch<SetStateAction<IShippingService>>
    }) => {
    const { isModalOpen, setIsModalOpen, shippingServices, selectedService, setSelectedService } = props
    const [ tempSelected, setTempSelected] = useState<IShippingService>(selectedService);
    const onConfirm = () => {
        setSelectedService(tempSelected)
        setIsModalOpen(false)
    }

    return (
        <Modal className='modal-shipment' open={isModalOpen} onCancel={() => setIsModalOpen(false)}  footer={null} closeIcon={false}>
            <div className='content-header'>
                <h5>Pilih Jasa Ekspedisi</h5>
                <a className='text-black' onClick={() => setIsModalOpen(false)}><X /></a>
            </div>
            <div className='content-body'>
                {shippingServices.map((item, index: number) => (
                    <div 
                        className={`card-shipment ${tempSelected.service_type_code == item.service_type_code ? 'selected' : ''}`} 
                        onClick={() => setTempSelected(item)}
                        key={index}
                    >
                        <div className='title'>
                            <label>{item.service_type_name}</label>
                            <p>Rp{formatterNumber(item.total_cost)}</p>
                        </div>
                        <span>Estimasi {item.sla}</span>
                    </div>
                ))}
                
            </div>
            <div className='content-footer'>
                <button onClick={() => onConfirm()}>Pilih Ekspedisi</button>
            </div>
        </Modal>
    )
    }

export default ModalShipment
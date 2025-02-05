import { IDestination } from '@/@core/@types/interface'
import ModalDestination from '@/@core/pages/jual-emas/modal-destination'
import ModalPin from '@/@core/pages/jual-emas/modal-pin'
import { ChevronLeft, ChevronRight } from '@untitled-ui/icons-react'
import { Checkbox } from 'antd'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react'

const JualEmasRingkasanView = (props: {setView:Dispatch<SetStateAction<string>>}) => {
    const { setView } = props
    const [ isModalOpen, setIsModalOpen] = useState(false)
    const [ isModalPinOpen, setIsModalPinOpen] = useState(false)
    const [ destination, setDestination] = useState<IDestination>({} as IDestination)

    const showSelectDestination = () => {
        setIsModalOpen(true)
    }
    return (
        <>
            <div className='ringkasan-section'>
                <div className='header-container'>
                    <h2>Jual Emas</h2>
                </div>
                <div className='main-container'>
                    <div className='header-area'>
                        <h5>Ringkasan Penjualan</h5>
                        <a><span className='my-icon icon-sm'><ChevronLeft /></span><span className='text'>Kembali</span></a>
                    </div>
                    <div className='body-area'>
                        <div className='detail'>
                            <div className='sub-detail'>
                                <label>Harga Emas / gram</label>
                                <p>Rp 1.349.500</p>
                            </div>
                            <div className='sub-detail'>
                                <label>Jumlah Jual</label>
                                <p>12 Gram</p>
                            </div>
                            <div className='sub-detail'>
                                <label>Harga Penjualan</label>
                                <p>Rp 16.194.000</p>
                            </div>
                            <div className='sub-detail total'>
                                <label>Total</label>
                                <p>Rp 16.194.000</p>
                            </div>
                        </div>
                        <div className={`destination-area`}>
                            <div className={`destination-button ${!destination.name ? '!border-b-0' : ''}`}>
                                <button onClick={() => showSelectDestination()}>
                                    <span className='label-info'>
                                        <Image src={`/images/payment.png`} alt='payment' width={0} height={0} sizes='100%' />
                                        Pilih Tujuan Penarikan
                                    </span>
                                    <span className='my-icon'><ChevronRight /></span>
                                </button>
                                {destination.name &&
                                    <div className='destination-detail'>
                                        <label>{destination.name}</label>
                                        <p>{destination.holder}</p>
                                        <span>{destination.number}</span>
                                    </div>
                                }
                            </div>
                        </div>
                        <hr />
                        <div className='confirmation-area'>
                            <Checkbox >Dengan ini saya menyetujui Syarat dan Ketentuan yang berlaku</Checkbox>
                            <button className='confirmation-button' onClick={() => setIsModalPinOpen(true)}>Konfirmasi Penjualan</button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalDestination isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setDestination={setDestination} />
            <ModalPin isModalOpen={isModalPinOpen} setIsModalOpen={setIsModalPinOpen} setView={setView}/>
        </>
    )
}

export default JualEmasRingkasanView
import { IPayment } from '@/@core/@types/interface'
import { ChevronRight, X } from '@untitled-ui/icons-react'
import { Modal } from 'antd'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState} from 'react'

const KeranjangModalPayment =(props: {
        isModalOpen:boolean, 
        setIsModalOpen:Dispatch<SetStateAction<boolean>>, 
        payment:IPayment,
        setPayment: Dispatch<SetStateAction<IPayment>>
    }) => {
    const { isModalOpen, setIsModalOpen, payment, setPayment } = props
    const [ tempPayment, setTempPayment ] = useState(payment);

    const onConfirmPayment = () => {
        setPayment(tempPayment)
        setIsModalOpen(false)
    }

    const toggleSubMenu = (id:string) => {
        const element = document.getElementById(id)
        const elementChevron = document.getElementById(id+'--chevron')

        if (element) {
            element.classList.toggle('max-h-[500px]')
        }
        if (elementChevron) {
            elementChevron.classList.toggle('transform');
            elementChevron.classList.toggle('rotate-180');
        }
    }

    return (
        <Modal className='modal-voucher' open={isModalOpen} onCancel={() => setIsModalOpen(false)}  footer={null} closeIcon={false}>
            <div className='flex justify-between items-center px-[30px] py-[22px]'>
                <h5 className='text-[20px]/[22px] font-semibold text-[#1F211E]'>Pilih Metode Pembayaran</h5>
                <a className='text-black' onClick={() => setIsModalOpen(false)}><X /></a>
            </div>
            <div className='content-body'>
                <ul className='flex flex-col gap-[16px]'> 
                    <li className='border-b border-b-[#E1E1E1] pb-[8px]'>
                        <a 
                            className='flex items-center justify-between text-[16px]/[19px] font-bold text-[#2E2E30] pb-[8px] w-full'
                            onClick={() => toggleSubMenu('submenu--mbanking')}
                        >
                            <span className='flex items-center gap-[8px]'>
                                <Image src={`/images/mbanking.png`} alt='mbanking' width={24} height={234} sizes='100%' />
                                mBanking / Virtual Account
                            </span>  
                            <span id='submenu--users--chevron' className={`transition-all duration-500`}><span className='my-icon icon-sm text-neutral-500'><ChevronRight /></span></span>
                        </a>
                        <ul id="submenu--mbanking" className={`flex flex-col gap-[0px] max-h-0 transition-all duration-500 overflow-hidden pl-[24px]`}>
                            <li>
                                <a
                                    onClick={() => setTempPayment({type: 'VA', type_name: 'Virtual Account', name: 'BCA'})} 
                                    className={`flex items-center gap-[16px] p-[12px] text-[14px]/[22px] font-semibold text-black w-full hover:bg-[#E8EDED] rounded-[8px] ${tempPayment.name == 'BCA' ? 'bg-[#E8EDED]' : ''}`}
                                >
                                    <Image src={`/images/bca.png`} alt='bca' width={24} height={234} sizes='100%' />
                                    <span className='flex items-center gap-[8px]'>Bank BCA</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => setTempPayment({type: 'VA', type_name: 'Virtual Account', name: 'BRI'})}  
                                    className={`flex items-center gap-[16px] p-[12px] text-[14px]/[22px] font-semibold text-black w-full hover:bg-[#E8EDED] rounded-[8px] ${tempPayment.name == 'BRI' ? 'bg-[#E8EDED]' : ''}`}
                                >
                                    <Image src={`/images/bni.png`} alt='bni' width={24} height={234} sizes='100%' />
                                    <span className='flex items-center gap-[8px]'>Bank BRI</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => setTempPayment({type: 'VA', type_name: 'Virtual Account', name: 'MANDIRI'})}  
                                    className={`flex items-center gap-[16px] p-[12px] text-[14px]/[22px] font-semibold text-black w-full hover:bg-[#E8EDED] rounded-[8px] ${tempPayment.name == 'MANDIRI' ? 'bg-[#E8EDED]' : ''}`}
                                >
                                    <Image src={`/images/bni.png`} alt='bni' width={24} height={234} sizes='100%' />
                                    <span className='flex items-center gap-[8px]'>Bank Mandiri</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                   
                </ul>
            </div>
            <div className='content-footer'>
                <button onClick={() => onConfirmPayment()}>Pilih Pembayaran</button>
            </div>
        </Modal>
    )
    }

export default KeranjangModalPayment
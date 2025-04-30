import { IPayment, IPaymentBank, IPaymentMethod } from '@/@core/@types/interface'
import axiosInstance from '@/@core/utils/axios'
import { ChevronRight, X } from '@untitled-ui/icons-react'
import { Modal } from 'antd'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState} from 'react'

const KeranjangModalPayment =(props: {
        isModalOpen:boolean, 
        setIsModalOpen:Dispatch<SetStateAction<boolean>>, 
        payment:IPayment,
        setPayment: Dispatch<SetStateAction<IPayment>>
    }) => {
    const { isModalOpen, setIsModalOpen, payment, setPayment } = props
    const [ tempPayment, setTempPayment ] = useState(payment);
    const [payments, setPayments] = useState<IPaymentMethod[]>([])

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

    const fetchData = useCallback(async () => {
        const resp = await axiosInstance.get(`core/payment/method/?limit=10&offset=0`);
        const { results } = resp.data
        results.forEach((item:IPaymentMethod) => {
            if (item.payment_method_name == 'VA') {
                const temp:IPaymentBank[] = [
                    {bank_code : 'BCA', bank_name: 'Bank BCA', url: '/images/bca.png'},
                    {bank_code : 'BRI', bank_name: 'Bank BRI', url: '/images/bni.png'},
                    {bank_code : 'MANDIRI', bank_name: 'Bank Mandiri', url: '/images/bni.png'}
                ]
                item.banks = temp
            } else {
                item.banks = []
            }
        });
        setPayments(results)
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <Modal className='modal-voucher' open={isModalOpen} onCancel={() => setIsModalOpen(false)}  footer={null} closeIcon={false}>
            <div className='flex justify-between items-center px-[30px] py-[22px]'>
                <h5 className='text-[20px]/[22px] font-semibold text-[#1F211E]'>Pilih Metode Pembayaran</h5>
                <a className='text-black' onClick={() => setIsModalOpen(false)}><X /></a>
            </div>
            <div className='content-body'>
                <ul className='flex flex-col gap-[16px]'> 
                    {payments.map((item:IPaymentMethod, index:number) => (
                        <li className='border-b border-b-[#E1E1E1] pb-[8px]' key={index}>
                            <a 
                                className='flex items-center justify-between text-[16px]/[19px] font-bold text-[#2E2E30] pb-[8px] w-full'
                                onClick={() => toggleSubMenu(`submenu--${item.payment_method_id}`)}
                            >
                                <span className='flex items-center gap-[8px]'>
                                    <Image src={`/images/mbanking.png`} alt='mbanking' width={24} height={234} sizes='100%' />
                                    {item.payment_method_name}
                                </span>  
                                <span id='submenu--users--chevron' className={`transition-all duration-500`}><span className='my-icon icon-sm text-neutral-500'><ChevronRight /></span></span>
                            </a>
                            <ul id={`submenu--${item.payment_method_id}`} className={`flex flex-col gap-[0px] max-h-0 transition-all duration-500 overflow-hidden pl-[24px]`}>
                                {item.banks.map((bank, index2) => (
                                    <li key={`${index}-${index2}`}>
                                        <a
                                            onClick={() => setTempPayment({method_id: item.payment_method_id, method_name: item.payment_method_name, va_bank: bank.bank_code})} 
                                            className={`flex items-center gap-[16px] p-[12px] text-[14px]/[22px] font-semibold text-black w-full hover:bg-[#E8EDED] rounded-[8px] ${tempPayment.va_bank == bank.bank_code? 'bg-[#E8EDED]' : ''}`}
                                        >
                                            <Image src={bank.url} alt={bank.bank_name} width={24} height={234} sizes='100%' />
                                            <span className='flex items-center gap-[8px]'>{bank.bank_name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}                   
                </ul>
            </div>
            <div className='content-footer'>
                <button onClick={() => onConfirmPayment()}>Pilih Pembayaran</button>
            </div>
        </Modal>
    )
    }

export default KeranjangModalPayment
import { IOrder, IPayment, IPaymentBank, IPaymentMethod } from '@/@core/@types/interface'
import { useGlobals } from '@/@core/hoc/useGlobals'
import axiosInstance from '@/@core/utils/axios'
import { ChevronRight, X } from '@untitled-ui/icons-react'
import { Modal } from 'antd'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState} from 'react'

const KeranjangModalPayment =(props: {
        isModalOpen:boolean, 
        setIsModalOpen:Dispatch<SetStateAction<boolean>>, 
        payment:IPayment,
        setPayment: Dispatch<SetStateAction<IPayment>>,
        order:IOrder
    }) => {
    const { isModalOpen, setIsModalOpen, payment, setPayment, order } = props
    const { globals } = useGlobals()
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
        const temps:IPaymentMethod[] = [];
        const total = (parseInt(order.order_amount) + parseInt(order.order_admin_amount) + parseInt(order.order_tracking_total) + parseInt(order.order_tracking_insurance));
        results.filter((x:IPaymentMethod) => x.payment_method_name != 'REDEEM').forEach((item:IPaymentMethod) => {
            if (item.payment_method_name == 'VA') {
                const temp:IPaymentBank[] = [
                    {bank_code : 'BCA', bank_name: 'Bank BCA', url: '/images/bca.png'},
                    {bank_code : 'BRI', bank_name: 'Bank BRI', url: '/images/bri.png'},
                    {bank_code : 'MANDIRI', bank_name: 'Bank Mandiri', url: '/images/mandiri.png'}
                ]
                item.banks = temp
            } else {
                item.banks = []
            }
            item.active = true
            if (item.payment_method_name == 'QRIS' && total > 10000000) {
                item.active = false
            }
            if (item.payment_method_name == 'SALDO' && parseFloat(globals.userProp.wallet_amt) < total) {
                item.active = false
            }
            temps.push(item)
        });
        setPayments(temps)
    }, [])

    useEffect(() => {
        if (isModalOpen && !payment.method_id) {
            setTempPayment({} as IPayment)
        }
    }, [isModalOpen, payment])

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
                        <li className={`border-b border-b-[#E1E1E1] pb-[8px]`} key={index}>
                            <a 
                                className={`flex items-center justify-between text-[16px]/[19px] font-bold text-[#2E2E30] pb-[8px] hover:text-blue-500 w-full ${tempPayment.method_id == item.payment_method_id? 'text-blue-500' : ''} ${!item.active ? 'text-neutral-300 hover:text-neutral-300 cursor-not-allowed' : ''}`}
                                onClick={() => 
                                    item.active ? (item.banks.length > 0 ? toggleSubMenu(`submenu--${item.payment_method_id}`) :
                                    setTempPayment({method_id: item.payment_method_id, method_name: item.payment_method_name, va_bank: item.payment_method_name, url: ''})) : ""
                                }
                            >
                                <span className='flex items-center gap-[8px]'>
                                    <Image src={`/images/mbanking.png`} alt='mbanking' width={24} height={234} sizes='100%' />
                                    {item.payment_method_name}
                                </span>  
                                <span id='submenu--users--chevron' className={`transition-all duration-500`}><span className={`my-icon icon-sm ${item.active ? 'text-neutral-500' : 'text-neutral-300'}`}><ChevronRight /></span></span>
                            </a>
                            <ul id={`submenu--${item.payment_method_id}`} className={`flex flex-col gap-[0px] max-h-0 transition-all duration-500 overflow-hidden pl-[24px]`}>
                                {item.banks.map((bank, index2) => (
                                    <li key={`${index}-${index2}`}>
                                        <a
                                            onClick={() => setTempPayment({method_id: item.payment_method_id, method_name: item.payment_method_name, va_bank: bank.bank_code, url: bank.url})} 
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
                <button onClick={() => onConfirmPayment()} disabled={!tempPayment.method_id}>Pilih Pembayaran</button>
            </div>
        </Modal>
    )
    }

export default KeranjangModalPayment
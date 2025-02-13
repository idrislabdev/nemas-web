import { IVoucher } from '@/@core/@types/interface'
import { X } from '@untitled-ui/icons-react'
import { Modal } from 'antd'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

const ModalVoucher =(props: {
        isModalOpen:boolean, 
        setIsModalOpen:Dispatch<SetStateAction<boolean>>, 
        setVoucher: Dispatch<SetStateAction<IVoucher>>
    }) => {
    const { isModalOpen, setIsModalOpen, setVoucher } = props
    const [vouchers, setVouchers] = useState<IVoucher[]>([] as IVoucher[])
    const [voucherTemp, setVoucherTemp] = useState<IVoucher>({} as IVoucher);

    const onConfirm = () => {
        setVoucher(voucherTemp)
        setIsModalOpen(false)
    }

    useEffect(() => {
        setVouchers([
            {code: 'xxx', name: '10% s.d. Rp 200Rb'},
            {code: 'bbb', name: '10% s.d. Rp 200Rb'},
            {code: 'ccc', name: '10% s.d. Rp 200Rb'},
            {code: 'dd',  name: '10% s.d. Rp 200Rb'},
            {code: 'ddx', name: '10% s.d. Rp 200Rb'},
            {code: '443', name: '10% s.d. Rp 200Rb'},
        ])
    }, [setVouchers])

    return (
        <Modal className='modal-voucher' open={isModalOpen} onCancel={() => setIsModalOpen(false)}  footer={null} closeIcon={false}>
            <div className='flex justify-between items-center px-[30px] py-[22px]'>
                <h5 className='text-[20px]/[22px] font-semibold text-[#1F211E]'>Pilih Promo/Voucher</h5>
                <a className='text-black' onClick={() => setIsModalOpen(false)}><X /></a>
            </div>
            <div className='content-body'>
                {vouchers.map((item:IVoucher, index:number) => (
                    <div 
                        className={`card cursor-pointer ${voucherTemp.code == item.code ? 'bg-[#E8EDED]' : ''}`} 
                        onClick={() => setVoucherTemp(item)}
                        key={index}
                    >
                        <div className='card-img'>
                            <Image src={`/images/dummy-voucher.png`} alt='voucher' width={0} height={0} sizes='100%' />
                        </div>
                        <div className='card-body'>
                            <label>Diskon</label>
                            <p>{item.name}</p>
                            <span>Beli Emas</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='content-footer'>
                <button onClick={() => onConfirm()}>Gunakan Promo</button>
            </div>
        </Modal>
    )
    }

export default ModalVoucher
import { IDestination } from '@/@core/@types/interface'
import { X } from '@untitled-ui/icons-react'
import { Modal } from 'antd'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'

const ModalDestination =(props: {
        isModalOpen:boolean, 
        setIsModalOpen:Dispatch<SetStateAction<boolean>>, 
        setDestination: Dispatch<SetStateAction<IDestination>>
    }) => {
    const { isModalOpen, setIsModalOpen, setDestination } = props

    const onConfirmDestination = () => {
        setDestination({name: "Arslan Abimanyu", holder: "JKL1234567890", number: "+6281234567890"})
        setIsModalOpen(false)
    }

    return (
        <Modal className='modal-destination' open={isModalOpen} onCancel={() => setIsModalOpen(false)}  footer={null} closeIcon={false}>
            <div className='flex justify-between items-center px-[30px] py-[22px]'>
                <h5 className='text-[20px]/[22px] font-semibold text-[#1F211E]'>Tujuan Penarikan</h5>
                <a className='text-black' onClick={() => setIsModalOpen(false)}><X /></a>
            </div>
            <div className='content-body'>
                <div className='destination-item'>
                    <div className='destination-header'>
                        <label>
                            <Image src={`/images/nemas-xs.png`} alt='nemas xs' width={0} height={0} sizes='100%' />
                            Saldo Nemas
                        </label>
                        <input type="radio" id="html" name="type" value="saldo" />
                    </div>
                    <div className='destination-body'>
                        <label>Arslan Abimanyu</label>
                        <p>JKL1234567890</p>
                        <span>+6281234567890</span>
                    </div>
                </div>
                <div className='destination-item'>
                    <div className='destination-header'>
                        <label>
                            <Image src={`/images/building.png`} alt='building' width={0} height={0} sizes='100%' />
                            Akun Bank
                        </label>
                        <input type="radio" id="html" name="type" value="akun" />
                    </div>
                    <div className='destination-body'>
                        <label>Arslan Abimanyu</label>
                        <p>Bank Central Asia TBK</p>
                        <span>09876543</span>
                    </div>
                </div>
            </div>
            <div className='content-footer'>
                <button onClick={() => onConfirmDestination()}>Selesai</button>
            </div>
        </Modal>
    )
    }

export default ModalDestination
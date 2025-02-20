import { Modal } from 'antd'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'

const ModalPlaystore =(props: {
        isModalOpen:boolean, 
        setIsModalOpen:Dispatch<SetStateAction<boolean>>, 
    }) => {
    const { isModalOpen, setIsModalOpen } = props

    return (
        <Modal className='modal-playstore' open={isModalOpen} onCancel={() => setIsModalOpen(false)}  footer={null} closeIcon={false}>
            <div className='flex flex-col justify-center items-center gap-[19px]'>
                <div className='flex flex-col justify-center items-center text-center'>
                    <div className='relative'>
                        <div className='w-[284px] h-[284px] bg-[#F0BF6B] rounded-[50%] absolute z-0 bottom-[50px]'></div>
                        <Image src={`/images/smartphone-mockup.png`} className='w-[272px] h-[402px] z-10 relative' alt='smartphone mockup' width={0} height={0} sizes='100%' />
                    </div>
                    <p className='text-[32px]/[34px] font-semibold'>Download <span className='font-extrabold'>Aplikasi Nemas</span> untuk Akses Fitur ini</p>
                </div>
                <div className='flex justify-center items-center gap-[16px]'>
                    <a className='cursor-pointer w-[171px] h-[50px]'><Image src={`/images/playstore.png`} className="w-full h-full" width={0} height={0} sizes='100%' alt='plastore' /></a>
                    <a className='cursor-pointer w-[171px] h-[50px]'><Image src={`/images/appstore.png`} className="w-full h-full" width={0} height={0} sizes='100%' alt='appstore' /></a>
                </div>
            </div>
        </Modal>
    )
    }

export default ModalPlaystore
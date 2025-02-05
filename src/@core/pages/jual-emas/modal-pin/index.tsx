import { Eye, X } from '@untitled-ui/icons-react'
import { Input, Modal } from 'antd'
import React, { Dispatch, SetStateAction } from 'react'

const ModalPin =(props: {
        isModalOpen:boolean, 
        setIsModalOpen:Dispatch<SetStateAction<boolean>>, 
        setView:Dispatch<SetStateAction<string>>
    }) => {
    const { isModalOpen, setIsModalOpen, setView } = props

    const handleKeyDown = (event:React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            setIsModalOpen(false)
            setView('success')
        }
      
}
    return (
        <Modal className='modal-pin' open={isModalOpen} onCancel={() => setIsModalOpen(false)}  footer={null} closeIcon={false}>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-[9px]'>
                    <h5 className='text-[20px]/[22px] font-semibold text-[#1F211E]'>Masukkan PIN</h5>
                    <p className='text-[14px]/[16.94px] text-black'>Masukkan 6 digit PIN anda</p>
                </div>
                <a className='text-black' onClick={() => setIsModalOpen(false)}><X /></a>
            </div>
            <div className='content-body'>
                <Input 
                    suffix={<a><span className='my-icon text-[#8D989D]'><Eye /></span></a>} 
                    type='password'
                    className='input-base' 
                    onKeyDown={handleKeyDown} 
                />
            </div>
        </Modal>
    )
    }

export default ModalPin
import axiosInstance from '@/@core/utils/axios'
import { Eye, X } from '@untitled-ui/icons-react'
import { Input, Modal } from 'antd'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

const KeranjangModalPin =(props: {
        isModalOpen:boolean, 
        setIsModalOpen:Dispatch<SetStateAction<boolean>>, 
        onSucces: () => void
    }) => {
    const { isModalOpen, setIsModalOpen, onSucces } = props
    const [ pin, setPin ] = useState("")

    const handleKeyDown = async (event:React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            const body = {
                pin : pin
            }
            axiosInstance.post(`users/user/pin/verify/`, body)
            .then(() => {
                onSucces()
            })
        }
    }

    useEffect(() => {
        if(isModalOpen) {
            setPin("")
        }
    },[isModalOpen])

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
                    value={pin}
                    suffix={<a><span className='my-icon text-[#8D989D]'><Eye /></span></a>} 
                    type='password'
                    className='input-base' 
                    onChange={(e) => setPin(e.target.value)}
                    onKeyDown={handleKeyDown} 
                    maxLength={6}
                />
            </div>
        </Modal>
    )
    }

export default KeranjangModalPin
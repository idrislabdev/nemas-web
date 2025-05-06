import axiosInstance from '@/@core/utils/axios';
import { Input, Modal } from 'antd'
import React, { Dispatch, SetStateAction, useState } from 'react'

const ModalForgotPassword =(props: {
        isModalOpen:boolean, 
        setIsModalOpen:Dispatch<SetStateAction<boolean>>, 
    }) => {
    const { isModalOpen, setIsModalOpen } = props
    const [email, setEmail] = useState('');

    const sendEmail = () => {
        const payload = {
            "email": email,
            "type": "Password"
          }
        axiosInstance.post("/users/token/request-reset-token/", payload)
        .then(() => {
            setIsModalOpen(false)
            
        })
    }

    return (
        <Modal className='modal-forgot-password' open={isModalOpen} onCancel={() => setIsModalOpen(false)}  footer={null} closeIcon={false}>
            <div className='flex flex-col justify-center items-center gap-[19px]'>
                <div className='flex flex-col justify-center items-center'>
                    <h5 className='font-medium text-2xl'>Lupa Password</h5>
                    <p className='text-base'>Masukkan email anda, untuk reset password</p>
                </div>
                <div className='flex flex-col gap-[6px] w-full'>
                    <label>Email</label>
                    <Input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <button 
                    className='bg-primary text-white w-full rounded-[8x] p-[8px]' 
                    onClick={() => sendEmail()}
                >
                        Reset Password
                </button>
            </div>
        </Modal>
    )
    }

export default ModalForgotPassword
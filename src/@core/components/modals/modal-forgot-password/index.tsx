import axiosInstance from '@/@core/utils/axios';
import { Input, Modal } from 'antd'
import { AxiosError } from 'axios';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

const ModalForgotPassword =(props: {
        isModalOpen:boolean, 
        setIsModalOpen:Dispatch<SetStateAction<boolean>>, 
    }) => {
    const { isModalOpen, setIsModalOpen } = props
    const [email, setEmail] = useState('');
    const [textMessage, setTextMessage] = useState('');

    const sendEmail = () => {
        const payload = {
            "email": email,
            "type": "Password"
          }
        axiosInstance.post("/users/token/request-reset-token/", payload)
        .then(() => {
            setIsModalOpen(false)
        })
        .catch((error) => {
            const err = error as AxiosError
            if (err.response && err.response.data && err.response.data) {
                if (err.status === 500) {
                    setTextMessage('Sorry, email not found')
                } else {
                    const errData = err.response.data
                    const jsonError = JSON.parse(JSON.stringify(errData))
                    setTextMessage(jsonError.email.toString())
                }
            }
            
        })
    }

    useEffect(() => {
        if (isModalOpen) {
            setTextMessage('')
            setEmail('')
        }
    }, [isModalOpen])

    return (
        <Modal className='modal-forgot-password' open={isModalOpen} onCancel={() => setIsModalOpen(false)}  footer={null} closeIcon={false}>
            <div className='flex flex-col justify-center items-center gap-[19px]'>
                <div className='flex flex-col justify-center items-center'>
                    <h5 className='font-medium text-2xl'>Lupa Password</h5>
                    <p className='text-base'>Masukkan email anda, untuk reset password</p>
                </div>
                <div className='flex flex-col justify-center w-full text-center'>
                    {textMessage !== '' && <label className='bg-red-600 text-white p-[6px] rounded-sm'>{textMessage}</label> }
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
"use client"
import { useGlobals } from '@/@core/hoc/useGlobals';
import axiosInstance from '@/@core/utils/axios';
import { Input, message } from 'antd'
import React, { useState } from 'react'

const UserKeamananSandiPage = () => {
    const { globals } = useGlobals();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    
    const changePassword = () => {
        const body = {
            name: globals.userLogin.name,
            password: password
        }
        axiosInstance.put(`users/me/`, body)
        .then(() => {
            setPassword('');
            setConfirmPassword('');
            messageApi.open({
                type: 'success',
                content: 'Password berhasil dirubah',
                duration: 10,
            });
        });
    }
  return (
    <>
        {contextHolder}
        <div className='keamanan-sub-container'>
            <h5>Keamanan Akun</h5>
            <div className='form-group'>
                <h6>Ubah Kata Sandi</h6>
                <div className='group-input'>
                    <label>Password</label>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' size='large' placeholder='Masukkan Password'/>
                </div>
                <div className='group-input'>
                    <label>Konfirmasi Password </label>
                    <Input value={confirmPassword} type='password' onChange={(e) => setConfirmPassword(e.target.value)} size='large' placeholder='Masukkan Password Baru' />
                    <div className='note'>
                        <p>Password harus mengandung setidaknya:</p>
                        <span>*) 8-16 Karakter</span>
                        <span>*) 1 Angka (0-9)</span>
                        <span>*) 1 Huruf besar (A-Z)</span>
                        <span>*) 1 Karakter spesial (Contoh: !, @, #, dsb)</span>
                    </div>
                </div>
            </div>
            <button onClick={() => changePassword()} disabled={password != confirmPassword || (password == '' || confirmPassword == '')}>Ubah Kata Sandi</button>
        </div>
    </>
  )
}

export default UserKeamananSandiPage
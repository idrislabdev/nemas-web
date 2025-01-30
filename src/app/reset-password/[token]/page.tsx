"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { Eye, EyeOff } from '@untitled-ui/icons-react';

const ResetPasswordToken = () => {
    const params = useParams<{ token: string }>();
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [showingAlertFailed, setShowingAlertFailed] = useState<boolean>(false);
    const [showingAlertSuccess, setShowingAlertSuccess] = useState<boolean>(false);
    const [alertDesc, setAlertDesc] = useState<string>('');
    const [seePass, setSeePass] = useState<boolean>(false);
    const [seeConfirmPass, setSeeConfirmPass] = useState<boolean>(false);

    const handleResetPassword = () => {
        if(password !== confirmPassword) {
            setShowingAlertFailed(true);
            setAlertDesc('password dan konfirmasi password harus sama');
        } else {
            const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.{8,16})/;
            if(!passwordRegex.test(password)) {
                setShowingAlertFailed(true);
                setAlertDesc('Password harus mengandung 8-16 karakter, 1 angka (0-9), 1 huruf besar (A-Z), dan 1 karakter spesial contoh @');
            } else {
                setLoading(true);
                axios.post(`https://18.138.179.185:8000/api/users/token/reset-token/${params.token}/`, {
                    new_data: password,
                    new_data_type: 'Password'
                }).then(response => {
                    console.log(response);
                    setLoading(false);
                    const message: string = response.data.message;
                    setShowingAlertFailed(false);
                    setShowingAlertSuccess(true);
                    setAlertDesc(message);
                }).catch(err => {
                    console.log(err);
                    setLoading(false);
                    const message: string = err.response.data.detail;
                    setShowingAlertFailed(true);
                    setShowingAlertSuccess(false);
                    setAlertDesc(message);
                });
            }
        }
    }
    
    return (
        <div>
            {/* {params.token} */}
            <div className='flex flex-col p-5 justify-center'>
                <h1 className='text-2xl text-center'>Terima kasih telah melakukan reset password, silahkan masukkan password baru anda</h1>
                <div className='flex flex-row'>
                    <div className='basis-[95%]'>
                        <input
                            type={seePass ? "text" : "password"}
                            placeholder='Masukkan Password Baru'
                            className='border border-solid border-black mt-2 p-2 rounded w-full'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='basis-[5%] justify-items-center' onClick={() => setSeePass(!seePass)}>
                        {
                            seePass ?
                            <Eye/> :
                            <EyeOff/>
                        }
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='basis-[95%]'>

                        <input
                            type={ seeConfirmPass ? "text" : "password"}
                            placeholder='Masukkan Konfirmasi Password Baru'
                            className='border border-solid border-black mt-2 p-2 rounded w-full'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className='basis-[5%] justify-items-center' onClick={() => setSeeConfirmPass(!seeConfirmPass)}>
                        {
                            seeConfirmPass ?
                            <Eye/> :
                            <EyeOff/>
                        }
                    </div>
                </div>
                <button
                    className={`border border-solid border-black ${password === "" || confirmPassword === "" ? 'bg-gray-200' : 'bg-green-600'} text-white p-2 mt-2 rounded`}
                    disabled={password === "" || confirmPassword === "" || loading === true}
                    onClick={handleResetPassword}
                >
                    {
                        loading ? "Loading..." : "Ubah Password"
                    }
                </button>
                {
                    (showingAlertFailed || showingAlertSuccess)&&
                    <div className={`bg-${showingAlertFailed ? 'red' : 'green'}-100 border border-${showingAlertFailed ? 'red' : 'green'}-400 text-${showingAlertFailed ? 'red' : 'green'}-700 px-4 py-3 rounded relative mt-2`} role="alert">
                        {alertDesc}
                    </div>
                }
            </div>
        </div>
    )
}

export default ResetPasswordToken
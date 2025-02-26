"use client"

import axiosInstance from '@/@core/utils/axios';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { IUserCreate } from '@/@core/@types/interface';
import Link from 'next/link';

const RegisterPageWrapper = () => {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [required, setRequired] = useState<IUserCreate>({} as IUserCreate)

    const onSave = async () => {
        // setError('');
        const body = {
            // "user_name": userName,
            "email" : email,
            "password": password,
            "phone_number": phoneNumber,
            "name" : name,
        }
        axiosInstance.post("/users/create/", body).
        then(() => {
            router.push("/login")
  
        })
        .catch((error) => {
            const err = error as AxiosError
            if (err.response && err.response.data && err.response.data) {
                const errData = err.response.data
                const jsonError = JSON.parse(JSON.stringify(errData))
                const data: IUserCreate = jsonError;
                setRequired(data)
            }
            
        });
    }

    return (
        <main className='register-page sm:mobile-responsive'>
        <div className='main-section'>
            <div className='main-container'>
                <div className='form-area'>
                    <div className='form'>
                        <div className='main-form'>
                            <div className='form-group'>
                                <label>Nama Akun</label>
                                <input 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`${required.name ? '!border-red-500' : ''}`}  
                                    placeholder='Masukkan Nama Akun'
                                />
                            </div>
                            <div className='form-group'>
                                <label>No Handphone</label>
                                <input
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)} 
                                    placeholder='Masukkan No Handphone'
                                />
                            </div>
                            <div className='form-group'>
                                <label>Email
                                    {required.email &&
                                        <span className='text-red-500 text-xs'> {required.email}</span>
                                    }
                                </label>
                                <input
                                    value={email}
                                    className={`${required.email ? '!border-red-500' : ''}`}  
                                    onChange={(e) => setEmail(e.target.value)}  
                                    placeholder='Masukkan Email'
                                />
                            </div>
                            <div className='form-group'>
                                <label>Tujuan Investasi</label>
                                <input placeholder='Masukkan Tujuan Investasi' />
                                {/* <select>
                                    <option value='test'>Test</option>
                                </select> */}
                            </div>
                            <div className='form-group'>
                                <label>Sumber Dana</label>
                                <input placeholder='Masukkan Sumber Dana' />
                                {/* <select>
                                    <option value='test'>Test</option>
                                </select> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='form-area'>
                    <div className='form'>
                        <div className='main-form'>
                            <div className='form-group'>
                                <label>Kode Referal (Opsional)</label>
                                <input placeholder='Masukkan Kode Referal'/>
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Masukkan Password'
                                />
                            </div>
                            <div className='form-group'>
                                <label className='!text-[#676E71] !text-[12px]/[22px]'>Password harus mengandung setidaknya:</label>
                                <div className='flex flex-col gap-[8px] text-[#676E71] text-[12px]/[22px] font-medium'>
                                    <p>*) 8-16 Karakter</p>
                                    <p>*) 1 Angka (0-9)</p>
                                    <p>*) 1 Huruf besar (A-Z)</p>
                                    <p>*) 1 Karakter spesial (Contoh: !, @, #, dsb)</p>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Ulangi Password 
                                    {password != confirmPassword && confirmPassword != '' &&
                                        <span className='text-red-500 text-xs'> Password didnt match</span>
                                    }
                                </label>
                                <input
                                    type='password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} 
                                    placeholder='Ulangi Masukkan Password'
                                />
                            </div>
                            <p className='text-[14px]/[22px] text-[#1F211E]'>
                                Dengan mendaftar, saya setuju dengan 
                                <Link href={`/syarat-ketentuan`} className='!text-[14px]/[22px] !text-[#39BFB6]'> Syarat dan Ketentuan</Link>, serta 
                                <Link href={`/kebijakan-privasi`} className='!text-[14px]/[22px] !text-[#39BFB6]'> Kebijakan Privasi</Link> yang telah ditetapkan oleh Nemas
                            </p>
                        </div>
                        <button onClick={() => onSave()} disabled={password != confirmPassword}>Daftar Sekarang</button>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}

export default RegisterPageWrapper
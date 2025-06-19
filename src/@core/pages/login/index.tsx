"use client";

import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { deleteCookie, setCookie } from "cookies-next";
import Link from 'next/link';
import { Eye, EyeOff } from '@untitled-ui/icons-react';
import ModalForgotPassword from '@/@core/components/modals/modal-forgot-password';
import { IUserLogin, IUserProp } from '@/@core/@types/interface';

const LoginPageWrapper = (props: {userLogin: IUserLogin, userProps: IUserProp, token:string}) => {
  const { token } = props;

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [isPassword, setIsPassword] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onLogin = async () => {
    setError('');
    const body = {
        "identifier": email,
        "password": password
    }
    axiosInstance.post("/users/token/", body).
    then((response) => {
        const data = response.data;
        if (data) {
            setCookie("token", data.access);
            localStorage.setItem("token", data.access)
            axiosInstance.get(`/users/me/`)
            .then((response) => {
                const datUser = response.data
                axiosInstance.get(`/users/user/prop/`)
                .then((response) => {
                    const dataProp = response.data
                    localStorage.setItem("user", JSON.stringify(datUser))
                    localStorage.setItem("user_prop", JSON.stringify(dataProp))
                    setCookie("user", JSON.stringify(datUser))
                    setCookie("user_prop", JSON.stringify(dataProp))
                    window.location.href = "/"
                });
            })
        }

    })
    .catch((error) => {
        console.log(error)
        // setError(error.response.data.error);
        setError("Email Atau Password Tidak Valid");
    });
}

useEffect(() => {
    if (token != "") {
        axiosInstance.get(`/users/me/`)
        .then((response) => {
            const data = response.data
            localStorage.setItem("user", JSON.stringify(data))
            router.push("/")
        })
        .catch(() => {
          deleteCookie('user');
          deleteCookie('user_prop');
          deleteCookie('token');
          localStorage.clear();
        });
    }
})

return (
    <main className='login-page sm:mobile-responsive md:mobile-responsive'>
      <div className='main-section'>
        <div className='main-container'>
          <div className='form-area'>
            <div className='form'>
              <h2>Login</h2>
              {error !== '' &&  <label className='bg-red-500 text-white text-[14px]/[17px] h-[40px] flex flex-col justify-center items-center rounded-[4px]'>{error}</label>}
              <div className='main-form'>
                <div className='form-group'>
                  <label>Email/No Handphone</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Masukkan Email/No Handphone'/>
                </div>
                <div className='form-group'>
                  <label>Password</label>
                  <div className='relative'>
                    <input 
                      className='w-full'
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      type={isPassword ? 'password' : 'text'} 
                      placeholder='Masukkan Password'
                      onKeyDown={e => {
                        if (e.key === 'Enter') {
                          onLogin();
                        }
                      }}
                    />
                    <a onClick={() => setIsPassword(!isPassword)} className='absolute right-[10px] top-[10px] cursor-pointer'>
                      <span className='my-icon icon-sm text-neutral-700'>
                        {isPassword && <Eye />}
                        {!isPassword && <EyeOff />}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='button-group'>
              <button onClick={() => onLogin()}>Login</button>
              <a className='cursor-pointer' onClick={() => setIsModalOpen(true)}>Lupa Password</a>
            </div>
          </div>
          <div className="vertical-divider">
            <div className="center-element">Atau</div>
          </div>
          <div className="horizontal-divider line one-line"><span className='text-[#17494E] text-[16px]/[26px]'>Atau</span></div>
          <div className='info-area'>
            <div className='title-info'>
              <h2>Belum Memiliki Akun?</h2>
              <Image src={`/images/piggy-bank.png`} alt='piggy-bank' width={0} height={0} sizes='100%' />
            </div>
            <div className='footer-info'>
              <h5>Ayo berinvestasi emas bersama <span>Nemas</span></h5>
              <Link href={`/register`}>Daftar</Link>
            </div>
          </div>
        </div>
        <Link href={`/`}>Kembali ke Halaman Utama</Link>
      </div>
      <ModalForgotPassword 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
      />
    </main>
  )
}

export default LoginPageWrapper
"use client";

import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { setCookie } from "cookies-next";

const LoginPageWrapper = () => {

  const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

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
                  const data = response.data
                  localStorage.setItem("user", JSON.stringify(data))
                  router.push("/")
              });
          }

      })
      .catch((error) => {
          console.log(error)
          // setError(error.response.data.error);
          setError("Email Atau Password Tidak Valid");
      });
  }

  useEffect(() => {
      const token = typeof window !== 'undefined'  ? localStorage.getItem("token") : undefined;
      if (token) {
          axiosInstance.get(`/users/me/`)
          .then((response) => {
              const data = response.data
              localStorage.setItem("user", JSON.stringify(data))
              router.push("/")
          });
      }
  })

  return (
      <main className='login-page sm:mobile-responsive'>
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
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Masukkan Password'/>
                  </div>
                </div>
              </div>
              <div className='button-group'>
                <button onClick={() => onLogin()}>Login</button>
                <a>Lupa Password</a>
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
                <button>Daftar</button>
              </div>
            </div>
          </div>
          <a>Kembali ke Halaman Utama</a>
        </div>
      </main>
  )
}

export default LoginPageWrapper
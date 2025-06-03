import MainHeader from '@/@core/components/main-header'
import Footer from '@/@core/components/footer'
import React from 'react'
import '@/styles/kebijakan-privasi.css'
import KebijakanPrivasiPageWrapper from '@/@core/pages/kebijakan-privasi'
import { IUserLogin, IUserProp } from '@/@core/@types/interface'
import { cookies } from 'next/headers'

const KebijakanPrivasiPage = () => {
  const cookieStore = cookies();
  const userLogin:IUserLogin = cookieStore.get("user") ? JSON.parse(cookieStore.get("user")?.value || "{}") : {}; //JSON.parse(getCookie('user') || "{}")
  const userProps:IUserProp = cookieStore.get("user_prop") ? JSON.parse(cookieStore.get("user_prop")?.value || "{}") : {};
  const token:string = cookieStore.get("token") ? JSON.parse(cookieStore.get("user_prop")?.value || "")  : "";

  return (
    <>
      <MainHeader userLogin={userLogin} userProps={userProps} token={token} />
      <KebijakanPrivasiPageWrapper />
      <Footer />
    </>
  )
}

export default KebijakanPrivasiPage
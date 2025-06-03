import MainHeader from '@/@core/components/main-header'
import SyaratKetentuanPageWrapper from '@/@core/pages/syarat-ketentuan'
import Footer from '@/@core/components/footer'
import React from 'react'
import '@/styles/syarat-ketentuan.css'
import { GlobalsProvider } from '@/@core/context/globalContext'
import { IUserLogin, IUserProp } from '@/@core/@types/interface'
import { cookies } from 'next/headers'

const SyaratKetentuanPage = () => {
  const cookieStore = cookies();
  const userLogin:IUserLogin = cookieStore.get("user") ? JSON.parse(cookieStore.get("user")?.value || "{}") : {}; //JSON.parse(getCookie('user') || "{}")
  const userProps:IUserProp = cookieStore.get("user_prop") ? JSON.parse(cookieStore.get("user_prop")?.value || "{}") : {};
  const token:string = cookieStore.get("token") ? JSON.parse(cookieStore.get("user_prop")?.value || "")  : "";

  return (
    <GlobalsProvider>
        <MainHeader userLogin={userLogin} userProps={userProps} token={token} />
        <SyaratKetentuanPageWrapper />
        <Footer />
    </GlobalsProvider>
  )
}

export default SyaratKetentuanPage
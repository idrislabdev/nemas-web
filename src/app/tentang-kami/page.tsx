import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import TentangKamiPageWrapper from '@/@core/pages/tentang-kami'
import React from 'react'
import '@/styles/tentang-kami.css'
import { GlobalsProvider } from '@/@core/context/globalContext'
import { IUserLogin, IUserProp } from '@/@core/@types/interface'
import { cookies } from 'next/headers'

const TentangKamiPage = () => {
  const cookieStore = cookies();
  const userLogin:IUserLogin = cookieStore.get("user") ? JSON.parse(cookieStore.get("user")?.value || "{}") : {}; //JSON.parse(getCookie('user') || "{}")
  const userProps:IUserProp = cookieStore.get("user_prop") ? JSON.parse(cookieStore.get("user_prop")?.value || "{}") : {};
  const token:string = cookieStore.get("token") ? JSON.parse(cookieStore.get("user_prop")?.value || "")  : "";

  return (
    <GlobalsProvider>
        <MainHeader userLogin={userLogin} userProps={userProps} token={token} />
        <TentangKamiPageWrapper />
        <Footer />
    </GlobalsProvider>
  )
}

export default TentangKamiPage
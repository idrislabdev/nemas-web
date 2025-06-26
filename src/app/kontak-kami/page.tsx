import MainHeader from '@/@core/components/main-header'
import Footer from '@/@core/components/footer'
import React from 'react'
import { GlobalsProvider } from '@/@core/context/globalContext'
import { IUserLogin, IUserProp } from '@/@core/@types/interface'
import { cookies } from 'next/headers'
import KontakKamiPageWrapper from '@/@core/pages/kontak-kami'
import '@/styles/kontak-kami.css'

const KontakKamiPage = () => {
  const cookieStore = cookies();
  const userLogin:IUserLogin = cookieStore.get("user") ? JSON.parse(cookieStore.get("user")?.value || "{}") : {}; //JSON.parse(getCookie('user') || "{}")
  const userProps:IUserProp = cookieStore.get("user_prop") ? JSON.parse(cookieStore.get("user_prop")?.value || "{}") : {};
  const token:string = cookieStore.get("token") ? JSON.parse(cookieStore.get("user_prop")?.value || "")  : "";

  return (
    <GlobalsProvider>
      <MainHeader userLogin={userLogin} userProps={userProps} token={token} />
      <KontakKamiPageWrapper/>
      <Footer />
    </GlobalsProvider>
  )
}

export default KontakKamiPage
import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import KeranjangPageWrapper from '@/@core/pages/keranjang'
import React from 'react'
import '@/styles/keranjang.css'
import { GlobalsProvider } from '@/@core/context/globalContext'
import { cookies } from 'next/headers';
import { IUserLogin, IUserProp } from '@/@core/@types/interface';

const KeranjangPage = () => {
  const cookieStore = cookies();
  const userLogin:IUserLogin = cookieStore.get("user") ? JSON.parse(cookieStore.get("user")?.value || "{}") : {}; //JSON.parse(getCookie('user') || "{}")
  const userProps:IUserProp = cookieStore.get("user_prop") ? JSON.parse(cookieStore.get("user_prop")?.value || "{}") : {};
  const token:string = cookieStore.get("token") ? JSON.parse(cookieStore.get("user_prop")?.value || "")  : "";

  return (
    <>
    <GlobalsProvider>
      <MainHeader userLogin={userLogin} userProps={userProps} token={token}/>
      <KeranjangPageWrapper />
      <Footer />
    </GlobalsProvider>
  </>
  )
}

export default KeranjangPage
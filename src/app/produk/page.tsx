// "use client";

import { IUserLogin, IUserProp } from '@/@core/@types/interface';
import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import { GlobalsProvider } from '@/@core/context/globalContext'
import ProdukPageWrapper from '@/@core/pages/produk'
import { cookies } from 'next/headers';
import React from 'react'

const ProdukPage =  () => {
  const cookieStore = cookies();
  const userLogin:IUserLogin = cookieStore.get("user") ? JSON.parse(cookieStore.get("user")?.value || "{}") : {}; //JSON.parse(getCookie('user') || "{}")
  const userProps:IUserProp = cookieStore.get("user_prop") ? JSON.parse(cookieStore.get("user_prop")?.value || "{}") : {};
  const token:string = cookieStore.get("token") ? JSON.parse(cookieStore.get("user_prop")?.value || "")  : "";

  return (
    <>
        <GlobalsProvider>
          <MainHeader userLogin={userLogin} userProps={userProps} token={token}/>
          <ProdukPageWrapper />
          <Footer />
        </GlobalsProvider>
    </>
  )
}

export default ProdukPage
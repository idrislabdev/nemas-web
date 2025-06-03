// "use client"
import React from 'react'
import MainHeader from '@/@core/components/main-header'
import Footer from '@/@core/components/footer'
import HomgePageWrapper from '@/@core/pages/home'

import '@/styles/home.css'
import { IUserLogin, IUserProp } from '@/@core/@types/interface'
import { cookies } from 'next/headers';
import { GlobalsProvider } from '@/@core/context/globalContext'

export default function  MainPage() {
  const cookieStore = cookies();
  const userLogin:IUserLogin = cookieStore.get("user") ? JSON.parse(cookieStore.get("user")?.value || "{}") : {}; //JSON.parse(getCookie('user') || "{}")
  const userProps:IUserProp = cookieStore.get("user_prop") ? JSON.parse(cookieStore.get("user_prop")?.value || "{}") : {};
  const token:string = cookieStore.get("token") ? JSON.parse(cookieStore.get("user_prop")?.value || "")  : "";

  return (
      <>
        <GlobalsProvider>
          <MainHeader userLogin={userLogin} userProps={userProps} token={token}/>
          <HomgePageWrapper userProps={userProps}/>
          <Footer />
        </GlobalsProvider>
      </>
  )
}


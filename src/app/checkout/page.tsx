import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import CheckoutPageWrapper from '@/@core/pages/checkout'
import React from 'react'
import '@/styles/checkout.css'
import { cookies } from 'next/headers'
import { IUserLogin, IUserProp } from '@/@core/@types/interface'

const CheckoutPage = () => {
  const cookieStore = cookies();
  const userLogin:IUserLogin = cookieStore.get("user") ? JSON.parse(cookieStore.get("user")?.value || "{}") : {}; //JSON.parse(getCookie('user') || "{}")
  const userProps:IUserProp = cookieStore.get("user_prop") ? JSON.parse(cookieStore.get("user_prop")?.value || "{}") : {};
  const token:string = cookieStore.get("token") ? JSON.parse(cookieStore.get("user_prop")?.value || "")  : "";

  return (
    <>
    <MainHeader userLogin={userLogin} userProps={userProps} token={token} />
    <CheckoutPageWrapper />
    <Footer />
  </>
  )
}

export default CheckoutPage
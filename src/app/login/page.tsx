import LoginPageWrapper from '@/@core/pages/login'
import React from 'react'
import '@/styles/login.css'
import SimpleHeader from '@/@core/components/simple-header'
import { cookies } from 'next/headers'
import { IUserLogin, IUserProp } from '@/@core/@types/interface'

const LoginPage = () => {
  const cookieStore = cookies();
  const userLogin:IUserLogin = cookieStore.get("user") ? JSON.parse(cookieStore.get("user")?.value || "{}") : {}; //JSON.parse(getCookie('user') || "{}")
  const userProps:IUserProp = cookieStore.get("user_prop") ? JSON.parse(cookieStore.get("user_prop")?.value || "{}") : {};
  const token:string = cookieStore.get("token") ? JSON.parse(cookieStore.get("user_prop")?.value || "")  : "";

  return (
    <>
      <SimpleHeader />
      <LoginPageWrapper userLogin={userLogin} userProps={userProps} token={token}  />
    </>
  )
}

export default LoginPage
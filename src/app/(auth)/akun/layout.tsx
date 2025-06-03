import React from 'react'
import MainHeader from '@/@core/components/main-header'
import Footer from '@/@core/components/footer'

import AkunSidebar from './akun-sidebar';
import '@/styles/user.css'
import HeaderAkun from '@/@core/pages/akun/header-akun';
import { GlobalsProvider } from '@/@core/context/globalContext';
import { cookies } from 'next/headers';
import { IUserLogin, IUserProp } from '@/@core/@types/interface';

const UserLayout = ({ children }: {children : React.ReactNode}) => {
  const cookieStore = cookies();
  const userLogin:IUserLogin = cookieStore.get("user") ? JSON.parse(cookieStore.get("user")?.value || "{}") : {}; //JSON.parse(getCookie('user') || "{}")
  const userProps:IUserProp = cookieStore.get("user_prop") ? JSON.parse(cookieStore.get("user_prop")?.value || "{}") : {};
  const token:string = cookieStore.get("token") ? JSON.parse(cookieStore.get("user_prop")?.value || "")  : "";
  return (
    <>
      <GlobalsProvider>
      <MainHeader userLogin={userLogin} userProps={userProps} token={token} />
        <main className='user-page sm:mobile-responsive md:mobile-responsive'>
          <HeaderAkun />
          <div className='main-section'>
            <AkunSidebar>{children}</AkunSidebar>
            <div className='main-container'>
              {children}
            </div>
          </div>
        </main>
      <Footer />
      </GlobalsProvider>
    </>
  );
}
export default UserLayout

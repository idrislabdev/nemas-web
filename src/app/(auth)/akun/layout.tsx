"use client"

import React from 'react'
import MainHeader from '@/@core/components/main-header'
import Footer from '@/@core/components/footer'

import AkunSidebar from './akun-sidebar';
import '@/styles/user.css'
import HeaderAkun from '@/@core/pages/akun/header-akun';
import { GlobalsProvider } from '@/@core/context/globalContext';

const UserLayout = ({ children }: {children : React.ReactNode}) => {
  return (
    <>
      <GlobalsProvider>
      <MainHeader />
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

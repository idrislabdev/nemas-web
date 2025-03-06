
import React from 'react'
import MainHeader from '@/@core/components/main-header'
import Footer from '@/@core/components/footer'

import {  Copy06,  InfoCircle, User01 } from '@untitled-ui/icons-react';
import AkunSidebar from './akun-sidebar';
import '@/styles/user.css'

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
        <main className='user-page sm:mobile-responsive md:mobile-responsive'>
          <div className='header-section'>
            <h2>Akun Saya</h2>
            <div className='profile-asset-container'>
              <div className='profile-container'>
                <div className='main-profile'>
                  <div className='main-info'>
                    <span className='user-icon'><User01 /></span>
                    <h5>Nama Anda</h5>
                    <label className='badge-member gold'>Gold Member</label>
                  </div>
                  <div className='id-info'>
                    <label>ID Nemas</label>
                    <p>JKL1234567890</p>
                  </div>
                </div>
                <div className='id-profile'>
                  <div className='profile-info'>
                    <label>ICH ID <span className='my-icon icon-xs'><InfoCircle /></span></label>
                    <p>IDG1234567890TYO0987654</p>
                  </div>
                  <a><span className='my-icon icon-sm'><Copy06 /></span></a>
                </div>
              </div>
              <div className='asset-container'>
                <div className='asset-card tabungan'>
                  <label>Tabungan Emas</label>
                  <p>Rp 0.0</p>
                </div>
                <div className='asset-card saldo'>
                  <label>Saldo Uang</label>
                  <p>Rp 0.0</p>
                </div>
              </div>
            </div>
          </div>
          <div className='main-section'>
            <AkunSidebar>{children}</AkunSidebar>
            <div className='main-container'>
              {children}
            </div>
          </div>
        </main>
      <Footer />
  </>
  );
}

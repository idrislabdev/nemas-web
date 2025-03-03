
import React from 'react'
import MainHeader from '@/@core/components/main-header'
import Footer from '@/@core/components/footer'

import '@/styles/user.css'
import { UserLoginIcon } from '@/@core/components/custom-icons';
import {  ChevronRight, Copy06, File06, Headphones01, HelpCircle, InfoCircle, Key01, LineChartUp02, LogOut01, User01 } from '@untitled-ui/icons-react';
import Link from 'next/link';

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
            <div className='profile-container'>
              <div className='main-profile'>
                <div className='main-info'>
                  <span className='user-icon'><UserLoginIcon /></span>
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
                <label>Tabungan Emas</label>
                <p>Rp 0.0</p>
              </div>
              <div className='asset-card investasi'>
                <label>Tabungan Emas</label>
                <p>Rp 0.0</p>
              </div>
            </div>
          </div>
          <div className='main-section'>
            <div className='sidebar-container'>
              <ul>
                <li>
                  <Link href={`/user/pengaturan`}>
                      <span className='my-icon'><User01 />Pengaturan Akun</span>  
                      <span><ChevronRight /></span>
                  </Link>
                </li>
                <li>
                  <Link href={`/user/keamanan`}>
                      <span className='my-icon'><Key01 />Keamanan Akun</span>  
                      <span><ChevronRight /></span>
                  </Link>
                </li>
                <li>
                  <Link href={`/user/setting-notifikasi`}>
                      <span className='my-icon'><LineChartUp02 />Setting Notifikasi Harga</span>  
                      <span><ChevronRight /></span>
                  </Link>
                </li>
                <li>
                  <Link href={`/user/bantuan`}>
                      <span className='my-icon'><HelpCircle />Bantuan</span>  
                      <span><ChevronRight /></span>
                  </Link>
                </li>
                <li>
                  <Link href={`/user/customer-service`}>
                      <span className='my-icon'><Headphones01 />Customer Service</span>  
                      <span><ChevronRight /></span>
                  </Link>
                </li>
                <li>
                  <Link href={`/user/legal`}>
                      <span className='my-icon'><File06 />Legal</span>  
                      <span><ChevronRight /></span>
                  </Link>
                </li>
                <li>
                  <a>
                      <span className='my-icon'><LogOut01 />Keluar</span>  
                      <span><ChevronRight /></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='main-container'>
              {children}
            </div>
          </div>
        </main>
      <Footer />
  </>
  );
}

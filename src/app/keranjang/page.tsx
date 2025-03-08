"use client";

import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import KeranjangPageWrapper from '@/@core/pages/keranjang'
import React from 'react'
import '@/styles/keranjang.css'
import { GlobalsProvider } from '@/@core/context/globalContext'

const KeranjangPage = () => {
  return (
    <>
    <GlobalsProvider>
      <MainHeader />
      <KeranjangPageWrapper />
      <Footer />
    </GlobalsProvider>
  </>
  )
}

export default KeranjangPage
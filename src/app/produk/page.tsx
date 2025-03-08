"use client";

import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import { GlobalsProvider } from '@/@core/context/globalContext'
import ProdukPageWrapper from '@/@core/pages/produk'
import React from 'react'

const ProdukPage =  () => {
  return (
    <>
        <GlobalsProvider>
          <MainHeader />
          <ProdukPageWrapper />
          <Footer />
        </GlobalsProvider>
    </>
  )
}

export default ProdukPage
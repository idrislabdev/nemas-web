"use client"

import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import { GlobalsProvider } from '@/@core/context/globalContext'
import DaftarTransaksiPageWrapper from '@/@core/pages/daftar-transaksi'
import React from 'react'
import '@/styles/daftar-transaksi.css'

const DaftarTransaksiPage = () => {
  return (
    <GlobalsProvider>
      <MainHeader />
      <DaftarTransaksiPageWrapper />
      <Footer />
    </GlobalsProvider>
  )
}

export default DaftarTransaksiPage
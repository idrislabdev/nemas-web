"use client"

import MainHeader from '@/@core/components/main-header'
import SyaratKetentuanPageWrapper from '@/@core/pages/syarat-ketentuan'
import Footer from '@/@core/components/footer'
import React from 'react'
import '@/styles/syarat-ketentuan.css'
import { GlobalsProvider } from '@/@core/context/globalContext'

const SyaratKetentuanPage = () => {
  return (
    <GlobalsProvider>
        <MainHeader />
        <SyaratKetentuanPageWrapper />
        <Footer />
    </GlobalsProvider>
  )
}

export default SyaratKetentuanPage
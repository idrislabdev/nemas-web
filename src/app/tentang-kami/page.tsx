"use client"
import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import TentangKamiPageWrapper from '@/@core/pages/tentang-kami'
import React from 'react'
import '@/styles/tentang-kami.css'
import { GlobalsProvider } from '@/@core/context/globalContext'

const TentangKamiPage = () => {
  return (
    <GlobalsProvider>
        <MainHeader />
        <TentangKamiPageWrapper />
        <Footer />
    </GlobalsProvider>
  )
}

export default TentangKamiPage
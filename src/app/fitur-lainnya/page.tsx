"use client"

import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import FiturLainnyaPageWrapper from '@/@core/pages/fitur-lainnya'
import React from 'react'
import '@/styles/fitur-lainnya.css'
import { GlobalsProvider } from '@/@core/context/globalContext'

const FiturLainnyaPage = () => {
  return (
    <>
      <GlobalsProvider>
      <MainHeader />
      <FiturLainnyaPageWrapper />
      <Footer />
      </GlobalsProvider>
    </>
  )
}

export default FiturLainnyaPage
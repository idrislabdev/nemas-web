"use client"
import React from 'react'
import MainHeader from '@/@core/components/main-header'
import Footer from '@/@core/components/footer'
import HomgePageWrapper from '@/@core/pages/home'

import '@/styles/home.css'
import { GlobalsProvider } from '@/@core/context/globalContext'

export default function  MainPage() {
  return (
    <GlobalsProvider>
      <MainHeader />
      <HomgePageWrapper />
      <Footer />
    </GlobalsProvider>
  )
}


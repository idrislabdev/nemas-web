"use client"
import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import React from 'react'
import FaqPageWrapper from '@/@core/pages/faq'
import '@/styles/faq.css'
import { GlobalsProvider } from '@/@core/context/globalContext'

const FaqPage = () => {
  return (
    <>
      <GlobalsProvider>
      <MainHeader />
      <FaqPageWrapper />
      <Footer />
      </GlobalsProvider>
    </>
  )
}

export default FaqPage
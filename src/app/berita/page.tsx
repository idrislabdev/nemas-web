"use client"
// import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import React from 'react'
import BeritaPageWrapper from '@/@core/pages/berita'
import Footer from '@/@core/components/footer'
import '@/styles/berita.css'
import { GlobalsProvider } from '@/@core/context/globalContext'

const BeritaPage = () => {
  return (
    <>
        <GlobalsProvider>
          <MainHeader />
          <BeritaPageWrapper />
          <Footer />
        </GlobalsProvider>
    </>
  )
}

export default BeritaPage
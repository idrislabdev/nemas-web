// import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import React from 'react'
import BeritaPageWrapper from '@/@core/pages/berita'
import Footer from '@/@core/components/footer'
import '@/styles/berita.css'

const BeritaPage = () => {
  return (
    <>
        <MainHeader />
        <BeritaPageWrapper />
        <Footer />
    </>
  )
}

export default BeritaPage
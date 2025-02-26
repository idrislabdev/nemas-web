import MainHeader from '@/@core/components/main-header'
import Footer from '@/@core/components/footer'
import React from 'react'
import '@/styles/kebijakan-privasi.css'
import KebijakanPrivasiPageWrapper from '@/@core/pages/kebijakan-privasi'

const KebijakanPrivasiPage = () => {
  return (
    <>
      <MainHeader />
      <KebijakanPrivasiPageWrapper />
      <Footer />
    </>
  )
}

export default KebijakanPrivasiPage
import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import JualEmasPageWrapper from '@/@core/pages/jual-emas'
import React from 'react'
import '@/styles/jual-emas.css'

const JualEmasPage = () => {
  return (
    <>
      <MainHeader />
      <JualEmasPageWrapper />
      <Footer />
    </>
  )
}

export default JualEmasPage
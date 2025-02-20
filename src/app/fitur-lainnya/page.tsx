import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import FiturLainnyaPageWrapper from '@/@core/pages/fitur-lainnya'
import React from 'react'
import '@/styles/fitur-lainnya.css'

const FiturLainnyaPage = () => {
  return (
    <>
      <MainHeader />
      <FiturLainnyaPageWrapper />
      <Footer />
    </>
  )
}

export default FiturLainnyaPage
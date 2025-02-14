import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import React from 'react'
import FaqPageWrapper from '@/@core/pages/faq'
import '@/styles/faq.css'

const FaqPage = () => {
  return (
    <>
      <MainHeader />
      <FaqPageWrapper />
      <Footer />
    </>
  )
}

export default FaqPage
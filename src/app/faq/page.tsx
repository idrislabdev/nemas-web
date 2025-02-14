import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import React from 'react'
import '@/styles/faq.css'
import FaqPageWrapper from '@/@core/pages/faq'

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
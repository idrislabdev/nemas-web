import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import PaymentPageWrapper from '@/@core/pages/payment'
import React from 'react'
import '@/styles/payment.css'

const BeliEmasPage = () => {
  return (
    <>
        <MainHeader />
        <PaymentPageWrapper />
        <Footer />
    </>
  )
}

export default BeliEmasPage
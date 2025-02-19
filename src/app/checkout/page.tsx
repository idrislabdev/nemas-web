import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import CheckoutPageWrapper from '@/@core/pages/checkout'
import React from 'react'
import '@/styles/checkout.css'

const CheckoutPage = () => {
  return (
    <>
    <MainHeader />
    <CheckoutPageWrapper />
    <Footer />
  </>
  )
}

export default CheckoutPage
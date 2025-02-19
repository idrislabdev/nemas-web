import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import KeranjangPageWrapper from '@/@core/pages/keranjang'
import React from 'react'
import '@/styles/keranjang.css'

const KeranjangPage = () => {
  return (
    <>
    <MainHeader />
    <KeranjangPageWrapper />
    <Footer />
  </>
  )
}

export default KeranjangPage
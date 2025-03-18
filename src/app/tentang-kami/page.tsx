import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import TentangKamiPageWrapper from '@/@core/pages/tentang-kami'
import React from 'react'
import '@/styles/tentang-kami.css'

const TentangKamiPage = () => {
  return (
    <>
        <MainHeader />
        <TentangKamiPageWrapper />
        <Footer />
    </>
  )
}

export default TentangKamiPage
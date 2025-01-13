import React from 'react'
import MainHeader from '@/@core/components/main-header'
import Footer from '@/@core/components/footer'
import HomgePageWrapper from '@/@core/pages/home'

import '@/styles/home.css'

export default async function  MainPage() {
  return (
    <>
      <MainHeader />
      <HomgePageWrapper />
      <Footer />
    </>
  )
}


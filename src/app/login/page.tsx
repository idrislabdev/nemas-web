import LoginPageWrapper from '@/@core/pages/login'
import React from 'react'
import '@/styles/login.css'
import SimpleHeader from '@/@core/components/simple-header'

const LoginPage = () => {
  return (
    <>
      <SimpleHeader />
      <LoginPageWrapper />
    </>
  )
}

export default LoginPage
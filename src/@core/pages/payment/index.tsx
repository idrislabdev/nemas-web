"use client"

import React, { useState } from 'react'
import PaymentDetailTransaksiView from './detail-transaksi-view'
import PaymentSuccessView from './success-view'
import PaymentWaitingView from './waiting-view'

const PaymentPageWrapper = () => {
  const [view, setView] = useState('detail')
  return (
    <main className='payment-page sm:mobile-responsive'>
        {view == 'detail' && <PaymentDetailTransaksiView setView={setView} /> }
        {view == 'waiting' && <PaymentWaitingView setView={setView} /> }
        {view == 'success' && <PaymentSuccessView /> }
    </main>
  )
}

export default PaymentPageWrapper
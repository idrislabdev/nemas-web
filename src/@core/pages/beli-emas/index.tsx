"use client"

import React, { useState } from 'react'
import BeliEmasMainView from './main-view'
import BeliEmasDetailTransaksiView from './detail-transaksi-view'

const BeliEmasPageWrapper = () => {
  const [view, setView] = useState('main')
  return (
    <main className='beli-emas-page sm:mobile-responsive'>
        {view == 'main' &&  <BeliEmasMainView setView={setView} /> }
        {view == 'detail' && <BeliEmasDetailTransaksiView setView={setView} /> }
    </main>
  )
}

export default BeliEmasPageWrapper
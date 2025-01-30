"use client"
import React, { useState } from 'react'
import JualEmasMainView from './main-view';
import JualEmasRingkasanView from './ringkasan-view';
import JualEmasSuccessView from './success-view';

const JualEmasPageWrapper = () => {
    const [view, setView] = useState('main')

    return (
        <main className='jual-emas-page sm:mobile-responsive'>
            {view == 'main' &&  <JualEmasMainView setView={setView} /> }
            {view == 'ringkasan' &&  <JualEmasRingkasanView  setView={setView}/> }
            {view == 'success' &&  <JualEmasSuccessView setView={setView}/> }
        </main>
  )
}

export default JualEmasPageWrapper
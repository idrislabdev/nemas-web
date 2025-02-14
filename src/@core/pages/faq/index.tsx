import React from 'react'
import FaqAccordion from './faq-accordion'

const FaqPageWrapper = () => {
  return (
    <main className='faq-page sm:mobile-responsive'>
        <div className='main-section'>
            <div className='header-container'>
              <h2>Frequently Asked Questions (FAQ)</h2>
              <p>Telusuri FAQ kami di bawah ini, jika anda tidak dapat menemukan jawaban atas pertanyaan yang anda cari, silahkan hubungi kami.</p>
            </div>
            <div className='faq-container'>
              <div className='faq-wrapper'>
                <FaqAccordion />
                <FaqAccordion />
                <FaqAccordion />
                <FaqAccordion />
                <FaqAccordion />
              </div>
              <div className='faq-wrapper'>
                <FaqAccordion />
                <FaqAccordion />
                <FaqAccordion />
                <FaqAccordion />
                <FaqAccordion />
              </div>
            </div>
        </div>
    </main>
  )
}

export default FaqPageWrapper
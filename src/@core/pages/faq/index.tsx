import React from 'react'
import FaqAccordion from './faq-accordion'
import { getFaqs } from '@/@core/services/api'
import { IFaq } from '@/@core/@types/interface'

const FaqPageWrapper = async () => {
  const resp = await getFaqs(0,100)
  const faqs:IFaq[] = resp.data.results
  const val = Math.round(faqs.length / 2)
  return (
    <main className='faq-page sm:mobile-responsive'>
        <div className='main-section'>
            <div className='header-container'>
              <h2>Frequently Asked Questions (FAQ)</h2>
              <p>Telusuri FAQ kami di bawah ini, jika anda tidak dapat menemukan jawaban atas pertanyaan yang anda cari, silahkan hubungi kami.</p>
            </div>
            <div className='faq-container'>
              <div className='faq-wrapper'>
                {faqs.slice(0, val).map((item, index:number) => (
                  <FaqAccordion item={item} key={`a${index}`}/>
                ))}
              </div>
              <div className='faq-wrapper'>
                {faqs.slice(val, faqs.length).map((item, index:number) => (
                  <FaqAccordion item={item} key={`b${index}`}/>
                ))}
              </div>
            </div>
        </div>
    </main>
  )
}

export default FaqPageWrapper
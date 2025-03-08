
import React, { useCallback, useEffect, useState } from 'react'
import FaqAccordion from './faq-accordion'
import { IFaq } from '@/@core/@types/interface'
import axiosInstance from '@/@core/utils/axios'

const FaqPageWrapper = () => {
  const [faqs, setFaqs] = useState<IFaq[]>([]);
  const [val, setval]=  useState(0)

  const fetchData = useCallback(async () => {
      const resp = await axiosInstance.get(`core/information/educational/?offset=0&limit=100`);
      const { results } = resp.data
      setFaqs(results)
      setval(Math.round(results.length / 2))

  }, [setFaqs])

  useEffect(() => {
      fetchData()
  }, [fetchData])
  return (
    <main className='faq-page sm:mobile-responsive md:mobile-responsive'>
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
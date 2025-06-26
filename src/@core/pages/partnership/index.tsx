import React from 'react'
import { IArticle, IUserProp } from '@/@core/@types/interface'
import PartnerHeroSection from './hero-section'
import PartnerBenefitSection from './benefit-section'
import axiosInstance from '@/@core/utils/axios'
import PartnerArticleSection from './article-section'
import PartnerPartnersSection from './partners-section'
import PartnerTestimonySection from './testimony-section'
import PartnerFeaturesSection from './features-section'

// import { useGlobals } from '@/@core/hoc/useGlobals'

const PartnerPageWrapper = async (props : {userProps: IUserProp}) => {
  const { userProps } = props
  console.log(userProps)
  const respArticle = await axiosInstance.get(`core/information/article/?offset=0&limit=3`);
  const articles:IArticle[] = respArticle.data.results

  const respTestimonies = await axiosInstance.get(`core/information/rating/?offset=0&limit=5`);
  const testimonies = respTestimonies.data.results

  return (
    <main className='partner-page sm:mobile-responsive md:mobile-responsive'>
      <PartnerHeroSection />
      <PartnerBenefitSection />
      <PartnerPartnersSection />
      <PartnerTestimonySection testimonies={testimonies} />
      <PartnerFeaturesSection />
      <PartnerArticleSection articles={articles} />
    </main>
  )
}

export default PartnerPageWrapper
import React from 'react'
import HomeHeroSection from './hero-section'
import HomeGoldNavigationSection from './gold-navigation-section'
import HomeChartSection from './chart-section'
import HomeArticleSection from './article-section'
import HomeTestimonySection from './testimony-section'
import HomeVerifiedSection from './verified-section'
import { getArticles, getTestimonies } from '@/@core/services/api'
import { IArticle, IRating } from '@/@core/@types/interface'

const HomgePageWrapper = async () => {

  const respArticle = await getArticles(0,3)
  const respTestimonies = await getTestimonies(0,3)

  const articles:IArticle[] = respArticle.data.results
  const testimonies:IRating[] = respTestimonies.data.results

  return (
    <main className='home-page sm:mobile-responsive'>
        <HomeHeroSection />
        <HomeGoldNavigationSection />
        <HomeChartSection />
        <HomeArticleSection articles={articles} />
        <HomeTestimonySection testimonies={testimonies}/>
        <HomeVerifiedSection />
    </main>
  )
}

export default HomgePageWrapper
import React from 'react'
import HomeHeroSection from './hero-section'
import HomeGoldNavigationSection from './gold-navigation-section'
import HomeChartSection from './chart-section'
import HomeArticleSection from './article-section'
import HomeTestimonySection from './testimony-section'
import HomeVerifiedSection from './verified-section'
import { getArticles, getBanners, getTestimonies } from '@/@core/services/api'
import { IArticle, IPromo, IRating } from '@/@core/@types/interface'

const HomgePageWrapper = async () => {

  const respArticle = await getArticles(0,3)
  const respTestimonies = await getTestimonies(0,3)
  const respBanners = await getBanners(0,5)

  const articles:IArticle[] = respArticle.data.results
  const banners:IPromo[] = respBanners.data.results
  const testimonies:IRating[] = respTestimonies.data.results

  return (
    <main className='home-page sm:mobile-responsive'>
        <HomeHeroSection banners={banners}/>
        <HomeGoldNavigationSection />
        <HomeChartSection />
        <HomeArticleSection articles={articles} />
        <HomeTestimonySection testimonies={testimonies}/>
        <HomeVerifiedSection />
    </main>
  )
}

export default HomgePageWrapper
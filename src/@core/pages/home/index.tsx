
import React, { useCallback, useEffect, useState } from 'react'
import HomeHeroSection from './hero-section'
import HomeGoldNavigationSection from './gold-navigation-section'
import HomeChartSection from './chart-section'
import HomeArticleSection from './article-section'
import HomeTestimonySection from './testimony-section'
import HomeVerifiedSection from './verified-section'
import { IArticle, IPromo, IRating } from '@/@core/@types/interface'
import axiosInstance from '@/@core/utils/axios'

const HomgePageWrapper = () => {

  const [articles, setArticles] = useState<IArticle[]>([]);
  const [banners, setBanners] = useState<IPromo[]>([]);
  const [testimonies, setTestimonies] = useState<IRating[]>([]);

  const fetchData = useCallback(async () => {
    const respArticle = await axiosInstance.get(`core/information/article/?offset=0&limit=3`);
    setArticles(respArticle.data.results)
    
    const respTestimonies = await axiosInstance.get(`core/information/rating/?offset=0&limit=5`);
    setTestimonies(respTestimonies.data.results)

    const respBanners = await axiosInstance.get(`core/information/promo/show/?offset=0&limit=5`);
    setBanners(respBanners.data.results)
  }, [setArticles, setBanners, setTestimonies])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <main className='home-page sm:mobile-responsive md:mobile-responsive'>
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
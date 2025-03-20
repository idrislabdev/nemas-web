
import React, { useCallback, useEffect, useState } from 'react'
import HomeHeroSection from './hero-section'
import HomeArticleSection from './article-section'
import HomeTestimonySection from './testimony-section'
import HomeVerifiedSection from './verified-section'
import { IArticle, IPromo, IRating, IUserProp } from '@/@core/@types/interface'
import axiosInstance from '@/@core/utils/axios'
import HomeUserProfileSection from './user-profile-section'
import HomeChartNewSection from './chart-new-section'
import HomeHightlightSection from './highlight-section'

const HomgePageWrapper = () => {

  const [articles, setArticles] = useState<IArticle[]>([]);
  const [banners, setBanners] = useState<IPromo[]>([]);
  const [testimonies, setTestimonies] = useState<IRating[]>([]);
  const [stateDone, setStateDone] = useState(false)
  const [userProp, setUserProp] = useState({} as IUserProp)

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

  useEffect(() => {
      if (!stateDone) {
          const userProp:IUserProp = JSON.parse(localStorage.getItem("user_prop") || "{}")
          setUserProp(userProp)
          setStateDone(true)
      }
  },[stateDone, setStateDone])

  return (
    <main className='home-page sm:mobile-responsive md:mobile-responsive'>
        <HomeHeroSection banners={banners}/>
        {/* <HomeGoldNavigationSection /> */}
        { userProp.name && <HomeUserProfileSection /> }
        <HomeHightlightSection testimonies={testimonies}/>
        <HomeChartNewSection />
        <HomeArticleSection articles={articles} />
        <HomeTestimonySection testimonies={testimonies}/>
        <HomeVerifiedSection />
    </main>
  )
}

export default HomgePageWrapper
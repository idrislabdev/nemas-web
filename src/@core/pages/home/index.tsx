
import React, { useCallback, useEffect, useState } from 'react'
import HomeArticleSection from './article-section'
import HomeTestimonySection from './testimony-section'
import HomeVerifiedSection from './verified-section'
import { IArticle, IPromo, IRating, IUserProp } from '@/@core/@types/interface'
import axiosInstance from '@/@core/utils/axios'
import HomeUserProfileSection from './user-profile-section'
import HomeChartNewSection from './chart-new-section'
import HomeHightlightSection from './highlight-section'
import HomeHeroNewSection from './hero-new-section'

const HomgePageWrapper = () => {

  const [articles, setArticles] = useState<IArticle[]>([]);
  const [testimonies, setTestimonies] = useState<IRating[]>([]);
  const [promoes, setPromoes] = useState<IPromo[]>([]);
  const [stateDone, setStateDone] = useState(false)
  const [userProp, setUserProp] = useState({} as IUserProp)

  const fetchData = useCallback(async () => {
    const respArticle = await axiosInstance.get(`core/information/article/?offset=0&limit=3`);
    setArticles(respArticle.data.results)
    
    const respTestimonies = await axiosInstance.get(`core/information/rating/?offset=0&limit=5`);
    setTestimonies(respTestimonies.data.results)

    const respPromo = await axiosInstance.get(`core/information/promo/show/?offset=0&limit=10`);
    const colors = ['#3ABFB6', '#CAF943', '#00BF6B', '#ACE1FF', '#D2F3F5']
    const temps:IPromo[] = []
    let counter=0;
    respPromo.data.results.forEach((item:IPromo) => {
      if (counter == 5)
        counter = 1;
      item.hexcode = colors[counter];
      counter++;
      temps.push(item)
    });

    setPromoes(temps)

  }, [setArticles, setTestimonies])

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
        <HomeHeroNewSection />
        {/* <HomeGoldNavigationSection /> */}
        { userProp.name && <HomeUserProfileSection /> }
        <HomeHightlightSection promoes={promoes}/>
        <HomeChartNewSection />
        <HomeArticleSection articles={articles} />
        <HomeTestimonySection testimonies={testimonies}/>
        <HomeVerifiedSection />
    </main>
  )
}

export default HomgePageWrapper
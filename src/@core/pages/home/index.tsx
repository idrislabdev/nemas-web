"use client"

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
// import { useGlobals } from '@/@core/hoc/useGlobals'

const HomgePageWrapper = (props : {userProps: IUserProp}) => {
  const { userProps } =props

  const [articles, setArticles] = useState<IArticle[]>([]);
  const [testimonies, setTestimonies] = useState<IRating[]>([]);
  const [promoes, setPromoes] = useState<IPromo[]>([]);

  const fetchData = useCallback(async () => {
    const respArticle = await axiosInstance.get(`core/information/article/?offset=0&limit=3`);
    setArticles(respArticle.data.results)
    
    const respTestimonies = await axiosInstance.get(`core/information/rating/?offset=0&limit=5`);
    setTestimonies(respTestimonies.data.results)

    const respPromo = await axiosInstance.get(`core/information/promo/show/?offset=0&limit=10`);
    const colors = ['#3ABFB6', '#CAF943', '#F0BF6B', '#ACE1FF', '#D2F3F5']
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

  return (
    <main className='home-page sm:mobile-responsive md:mobile-responsive'>
        <HomeHeroNewSection />
        {/* <HomeGoldNavigationSection /> */}
        { userProps.name && <HomeUserProfileSection userProps={userProps}/> }
        <HomeHightlightSection promoes={promoes}/>
        <HomeChartNewSection userProps={userProps}/>
        <HomeArticleSection articles={articles} />
        <HomeTestimonySection testimonies={testimonies}/>
        <HomeVerifiedSection />
    </main>
  )
}

export default HomgePageWrapper
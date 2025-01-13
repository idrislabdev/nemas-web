import React from 'react'
import HomeHeroSection from './hero-section'
import HomeGoldNavigationSection from './gold-navigation-section'
import HomeChartSection from './chart-section'
import HomeArticleSection from './article-section'
import HomeTestimonySection from './testimony-section'

const HomgePageWrapper = () => {
  return (
    <main className='home-page'>
        <HomeHeroSection />
        <HomeGoldNavigationSection />
        <HomeChartSection />
        <HomeArticleSection />
        <HomeTestimonySection />
    </main>
  )
}

export default HomgePageWrapper
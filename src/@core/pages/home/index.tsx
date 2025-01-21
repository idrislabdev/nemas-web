import React from 'react'
import HomeHeroSection from './hero-section'
import HomeGoldNavigationSection from './gold-navigation-section'
import HomeChartSection from './chart-section'
import HomeArticleSection from './article-section'
import HomeTestimonySection from './testimony-section'
import HomeVerifiedSection from './verified-section'

const HomgePageWrapper = () => {
  return (
    <main className='home-page sm:mobile-responsive'>
        <HomeHeroSection />
        <HomeGoldNavigationSection />
        <HomeChartSection />
        <HomeArticleSection />
        <HomeTestimonySection />
        <HomeVerifiedSection />
    </main>
  )
}

export default HomgePageWrapper
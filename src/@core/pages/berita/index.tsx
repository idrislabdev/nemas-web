import ArticleCard from '@/@core/components/article-card'
import Image from 'next/image'
import React from 'react'

const BeritaPageWrapper = () => {
  return (
    <main className='berita-page sm:mobile-responsive'>
        <div className='header-section'>
            <h2>Artikel Update</h2>
            <div className='news-container'>
                <Image src={`/images/articles/image1.png`} alt='image1' width={0} height={0} sizes='100%' />
                <div className='content-area'>
                    <div className='title-content'>
                        <h5>Harga Emas Naik Drastis! Segera Lakukan Ini!</h5>
                        <p>News  |  2 Jan 2025</p>
                    </div>
                    <a>Baca Selengkapnya</a>
                </div>
            </div>
        </div>
        <div className='articles-section'>
            <div className='article'>
                <ArticleCard />
            </div>
            <div className='article'>
                <ArticleCard />
            </div>
            <div className='article'>
                <ArticleCard />
            </div>
            <div className='article'>
                <ArticleCard />
            </div>
            <div className='article'>
                <ArticleCard />
            </div>
            <div className='article'>
                <ArticleCard />
            </div>
        </div>
    </main>
  )
}

export default BeritaPageWrapper
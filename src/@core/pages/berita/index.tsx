import { IArticle } from '@/@core/@types/interface'
import ArticleCard from '@/@core/components/article-card'
import { getArticles } from '@/@core/services/api'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BeritaPageWrapper = async () => {
    const respArticle = await getArticles(0,19)
    const articles:IArticle[] = respArticle.data.results
    
    return (
        <main className='berita-page sm:mobile-responsive md:mobile-responsive'>
            <div className='header-section'>
                <h2>Artikel Update</h2>
                <div className='news-container'>
                    <Image src={articles[0].article_background} alt='image1' width={0} height={0} sizes='100%' />
                    <div className='content-area'>
                        <div className='title-content'>
                            <h5>{articles[0].information_article_name}</h5>
                            <p>News  |   {moment(articles[0].article_publish_date).format("DD MMM YYYY")}</p>
                        </div>
                        <Link href={`/berita/${articles[0].information_article_id}`}>Baca Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className='articles-section'>
                {articles.map((item, index:number) => (
                    <div className='article' key={index}>
                        <ArticleCard item={item} />
                    </div>
                ))}
                
            </div>
        </main>
    )
}

export default BeritaPageWrapper
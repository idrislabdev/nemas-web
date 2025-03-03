import { IArticle } from '@/@core/@types/interface';
import { getArticleSlug } from '@/@core/services/api';
import moment from 'moment';
import Image from 'next/image';
import React from 'react'

const BeritaPageSlugWrapper = async(props: {slug:string}) => {
    const { slug } = props
    const respArticle = await getArticleSlug(slug)
    const article:IArticle = respArticle.data
    return (
        <main className='berita-page sm:mobile-responsive md:mobile-responsive'>
            <div className='slug-section'>
                <div className='header-container'>
                    <div className='title'>
                        <p>News  |  {moment(article.article_publish_date).format("DD MMM YYYY")}</p>
                        <h2>{article.information_article_name}</h2>
                        <label>{article.article_author}</label>
                    </div>
                    <Image src={article.article_background} alt='image1' width={0} height={0} sizes='100%' />
                </div>
                <div className='body-container'>
                    <p>
                        {article.information_article_body}
                    </p>
                </div>
            </div>
        </main>
    )
}

export default BeritaPageSlugWrapper
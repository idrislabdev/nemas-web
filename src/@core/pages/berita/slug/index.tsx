"use client"

import { IArticle } from '@/@core/@types/interface';
import axiosInstance from '@/@core/utils/axios';
import moment from 'moment';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react'

const BeritaPageSlugWrapper = (props: {slug:string}) => {
    const { slug } = props
    const [article, setArticle] = useState<IArticle>({} as IArticle);

    const fetchData = useCallback(async () => {
        const respArticle = await axiosInstance.get(`core/information/article/get/${slug}/`);
        setArticle(respArticle.data)
        
    }, [setArticle, slug])

    useEffect(() => {
        fetchData()
    }, [fetchData])

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
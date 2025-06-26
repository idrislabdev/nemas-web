import { IArticle } from '@/@core/@types/interface'
import moment from 'moment';
import Image from 'next/image'
import React from 'react'
import 'moment/locale/id';
import Link from 'next/link';
moment.locale('id')
const PartnerArticleSection = (props: {articles:IArticle[]}) => {
    const { articles } = props;
    return (
        <div className='partner-article-section'>
            <div className='title-container'>
                <h2>In the news</h2>
            </div>
            <div className='article-container'>
                {articles.map((item:IArticle, index:number) => (
                    <Link href={`/berita/${item.information_article_id}`} className='article-card' key={index}>
                        <div className='box-image'>
                            <Image src={item.article_background} alt='image1' width={0} height={0} sizes='100%' />
                        </div>
                        <div className='box-title'>
                            <h5>{item.information_article_name}</h5>
                            <p>News  |  {moment(item.article_publish_date).format("DD MMM YYYY")}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
  )
}

export default PartnerArticleSection
import { IArticle } from '@/@core/@types/interface'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticleCard = (props: {item:IArticle}) => {
  const { item } = props
  return (
    <Link href={`/berita/${item.information_article_id}`} className='main-article-card'>
        <div className='box-image'>
            <Image src={item.article_background} alt='image1' width={0} height={0} sizes='100%' />
        </div>
        <div className='box-title'>
            <h5>{item.information_article_name}</h5>
            <p>News  |  {moment(item.article_publish_date).format("DD MMM YYYY")}</p>
        </div>
    </Link>
  )
}

export default ArticleCard
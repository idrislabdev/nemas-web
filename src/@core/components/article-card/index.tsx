import Image from 'next/image'
import React from 'react'

const ArticleCard = () => {
  return (
    <div className='main-article-card'>
        <div className='box-image'>
            <Image src={`/images/articles/image1.png`} alt='image1' width={0} height={0} sizes='100%' />
        </div>
        <div className='box-title'>
            <h5>Harga Emas Naik Drastis! Segera Lakukan Ini!</h5>
            <p>News  |  2 Jan 2025</p>
        </div>
    </div>
  )
}

export default ArticleCard
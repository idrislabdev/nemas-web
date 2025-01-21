import Image from 'next/image'
import React from 'react'

const HomeArticleSection = () => {
  return (
    <div className='home-article-section'>
        <div className='title-container'>
            <div className='sub-title'>
                <h2>Artikel Terupdate</h2>
                <p>Dapatkan berita, promosi, dan informasi terbaru mengenai investasi emas bersama NEMAS</p>
            </div>
            <a>Lihat Semua</a>
        </div>
        <div className='article-container'>
            <div className='article-card'>
                <div className='box-image'>
                    <Image src={`/images/articles/image1.png`} alt='image1' width={0} height={0} sizes='100%' />
                </div>
                <p>News  |  2 Jan 2025</p>
                <h5>Harga Emas Naik Drastis! Segera Lakukan Ini!</h5>
            </div>
            <div className='article-card'>
                <div className='box-image'>
                    <Image src={`/images/articles/image2.png`} alt='image2' width={0} height={0} sizes='100%' />
                </div>
                <p>News  |  2 Jan 2025</p>
                <h5>Senin Harga Naik! Jangan Lupa Untuk Jaga-Jaga</h5>
            </div>
            <div className='article-card'>
                <div className='box-image'>
                    <Image src={`/images/articles/image3.png`} alt='image3' width={0} height={0} sizes='100%' />
                </div>
                <p>News  |  2 Jan 2025</p>
                <h5>Promo Payday! Beli Emas Dapat Cash Back</h5>
            </div>
        </div>
    </div>
  )
}

export default HomeArticleSection
import MainHeader from '@/@core/components/main-header'
import React from 'react'
import Footer from '@/@core/components/footer'
import '@/styles/berita.css'
import BeritaPageSlugWrapper from '@/@core/pages/berita/slug'

const BeritaPageSlug = async ({ params }: { params: Promise<{ slug: string }>}) => {
    const paramSlug = (await params).slug
  return (
    <>
        <MainHeader />
        <BeritaPageSlugWrapper slug={paramSlug}/>
        <Footer />
    </>
  )
}

export default BeritaPageSlug
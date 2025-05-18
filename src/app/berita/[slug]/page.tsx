"use client"

import MainHeader from '@/@core/components/main-header'
import React from 'react'
import Footer from '@/@core/components/footer'
import '@/styles/berita.css'
import BeritaPageSlugWrapper from '@/@core/pages/berita/slug'
import { useParams } from 'next/navigation'
import { GlobalsProvider } from '@/@core/context/globalContext'

const BeritaPageSlug = () => {
    const params = useParams();
    const slug = params.slug;
    return (
      <GlobalsProvider>
        <MainHeader />
        <BeritaPageSlugWrapper slug={slug.toString()}/>
        <Footer />
      </GlobalsProvider>
    )
}

export default BeritaPageSlug
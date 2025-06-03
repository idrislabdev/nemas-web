import MainHeader from '@/@core/components/main-header'
import React from 'react'
import Footer from '@/@core/components/footer'
import '@/styles/berita.css'
import BeritaPageSlugWrapper from '@/@core/pages/berita/slug'
import { GlobalsProvider } from '@/@core/context/globalContext'
import { cookies } from 'next/headers'
import { IUserLogin, IUserProp } from '@/@core/@types/interface'

const BeritaPageSlug = () => {
    const cookieStore = cookies();
    const userLogin:IUserLogin = cookieStore.get("user") ? JSON.parse(cookieStore.get("user")?.value || "{}") : {}; //JSON.parse(getCookie('user') || "{}")
    const userProps:IUserProp = cookieStore.get("user_prop") ? JSON.parse(cookieStore.get("user_prop")?.value || "{}") : {};
    const token:string = cookieStore.get("token") ? JSON.parse(cookieStore.get("user_prop")?.value || "")  : "";

    return (
      <GlobalsProvider>
        <MainHeader userLogin={userLogin} userProps={userProps} token={token} />
        <BeritaPageSlugWrapper />
        <Footer />
      </GlobalsProvider>
    )
}

export default BeritaPageSlug
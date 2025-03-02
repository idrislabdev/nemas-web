import { IGold } from '@/@core/@types/interface'
import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import ProdukPageWrapper from '@/@core/pages/produk'
import { getProducts } from '@/@core/services/api'
import React from 'react'

const ProdukPage = async () => {
  const resProducts = await getProducts(0,5)
  const products:IGold[] = resProducts.data.results
  return (
    <>
        <MainHeader />
        <ProdukPageWrapper products={products}/>
        <Footer />
    </>
  )
}

export default ProdukPage
"use client"

import React, { Dispatch, SetStateAction, useState } from 'react'
import KeranjangPaymentDetailTransaksiView from './detail-transaksi-view'
import KeranjangPaymentSuccessView from './success-view'
import KeranjangPaymentWaitingView from './waiting-view'
import { IOrder } from '@/@core/@types/interface'

const KeranjangPayment = (props: {
      order:IOrder,
      setOrder:Dispatch<SetStateAction<IOrder>>,
      setView:Dispatch<SetStateAction<string>>,
}) => {
  const { order, setOrder, setView } = props
  const [subView, setSubView] = useState('detail')
  return (
    <>
        {subView == 'detail' && <KeranjangPaymentDetailTransaksiView setSubView={setSubView} setView={setView} order={order} setOrder={setOrder} /> }
        {subView == 'waiting' && <KeranjangPaymentWaitingView setSubView={setSubView} order={order}/> }
        {subView == 'success' && <KeranjangPaymentSuccessView /> }
    </>
  )
}

export default KeranjangPayment
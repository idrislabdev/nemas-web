"use client"

import React, { Dispatch, SetStateAction, useState } from 'react'
import KeranjangPaymentDetailTransaksiView from './detail-transaksi-view'
import KeranjangPaymentSuccessView from './success-view'
import KeranjangPaymentWaitingView from './waiting-view'
import { IOrder } from '@/@core/@types/interface'

const KeranjangPayment = (props: {
      order:IOrder,
      setOrder:Dispatch<SetStateAction<IOrder>>,
}) => {
  const { order, setOrder } = props
  const [view, setView] = useState('detail')
  return (
    <>
        {view == 'detail' && <KeranjangPaymentDetailTransaksiView setView={setView} order={order} setOrder={setOrder} /> }
        {view == 'waiting' && <KeranjangPaymentWaitingView setView={setView} /> }
        {view == 'success' && <KeranjangPaymentSuccessView /> }
    </>
  )
}

export default KeranjangPayment
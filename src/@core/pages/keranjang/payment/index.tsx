"use client"

import React, { Dispatch, SetStateAction, useState } from 'react'
import KeranjangPaymentDetailTransaksiView from './detail-transaksi-view'
import KeranjangPaymentSuccessView from './success-view'
import KeranjangPaymentWaitingView from './waiting-view'
import { IOrder, IPayment } from '@/@core/@types/interface'

const KeranjangPayment = (props: {
      order:IOrder,
      setOrder:Dispatch<SetStateAction<IOrder>>,
      setView:Dispatch<SetStateAction<string>>,
}) => {
  const { order, setOrder, setView } = props
  const [subView, setSubView] = useState('detail')
  const [ payment, setPayment ] = useState<IPayment>({} as IPayment)
  return (
    <>
        {subView == 'detail' && <KeranjangPaymentDetailTransaksiView setSubView={setSubView} setView={setView} order={order} setOrder={setOrder} payment={payment} setPayment={setPayment} /> }
        {subView == 'waiting' && <KeranjangPaymentWaitingView setSubView={setSubView} order={order} payment={payment} /> }
        {subView == 'success' && <KeranjangPaymentSuccessView /> }
    </>
  )
}

export default KeranjangPayment
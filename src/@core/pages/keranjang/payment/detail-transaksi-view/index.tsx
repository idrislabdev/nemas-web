import { ChevronLeft, ChevronRight } from '@untitled-ui/icons-react';
import { Checkbox, CheckboxProps } from 'antd';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IOrder, IPayment } from '@/@core/@types/interface';
import KeranjangModalPin from '../modal-pin';
import KeranjangModalPayment from '../modal-payment';
import { formatterNumber } from '@/@core/utils/general';
import axiosInstance from '@/@core/utils/axios';
import { AxiosError } from 'axios';

const KeranjangPaymentDetailTransaksiView = (props: {
  setSubView: Dispatch<SetStateAction<string>>;
  setView: Dispatch<SetStateAction<string>>;
  setOrder: Dispatch<SetStateAction<IOrder>>;
  order: IOrder;
  payment: IPayment;
  setPayment: Dispatch<SetStateAction<IPayment>>;
}) => {
  const { setSubView, setView, setOrder, order, payment, setPayment } = props;
  const [isModalPayment, setIsModalPayment] = useState(false);
  const [isModalPinOpen, setIsModalPinOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const checkPin = async () => {
    setIsModalPinOpen(true);
  };

  const processPayment = async () => {
    const payload = {
      order_cart_id: order.order_cart_id,
      order_user_address_id: order.order_user_address,
      order_payment_method_id: payment.method_id,
      order_payment_method_name: payment.method_name,
      order_payment_va_bank: payment.va_bank,
      tracking_courier_service_id: order.tracking_courier_service_id,
      tracking_courier_service_code: order.tracking_courier_service_code,
      tracking_courier_id: order.tracking_courier_id,
    };
    axiosInstance
      .post('/orders/fix/order/create/', payload)
      .then((response) => {
        setIsModalPinOpen(false);
        const { data } = response.data;
        setOrder({
          ...order,
          pay_ref: data.pay_ref,
        });
        setSubView('waiting');
      })
      .catch((error) => {
        const err = error as AxiosError;
        if (err.response && err.response.data && err.response.data) {
          const errData = err.response.data;
          const jsonError = JSON.parse(JSON.stringify(errData));
          console.log(jsonError);
        }
      });
  };

  const onChange: CheckboxProps['onChange'] = (e) => {
    setChecked(!e.target.value);
  };

  useEffect(() => {
    if (payment.method_id) {
      setOrder({ ...order, order_admin_amount: '4500' });
    }
  }, [payment]);

  useEffect(() => {
    console.log(order);
  }, [order]);

  return (
    <>
      <div className="detail-transaksi-section">
        <div className="header-container">
          <h2>Beli Emas</h2>
        </div>
        <div className="main-container">
          <div className="header-area">
            <h5>Detail Transaksi</h5>
            <a onClick={() => setView('cart')} className="cursor-pointer">
              <span className="my-icon icon-sm">
                <ChevronLeft />
              </span>
              <span className="text">Kembali</span>
            </a>
          </div>
          <div className="body-area">
            <div className="detail">
              <div className="sub-detail header">
                <label>Harga Emas</label>
                <p>Rp{formatterNumber(parseInt(order.order_amount))}</p>
              </div>
              <div className="sub-detail header">
                <label>Jumlah Beli</label>
                <p>{parseFloat(order.order_item_weight)} Gram</p>
              </div>
              {parseInt(order.order_tracking_insurance) > 0 && (
                <div className="sub-detail header">
                  <label>Biaya Asuransi</label>
                  <p>
                    Rp
                    {formatterNumber(parseInt(order.order_tracking_insurance))}
                  </p>
                </div>
              )}
              {parseInt(order.order_tracking_total) > 0 && (
                <div className="sub-detail header">
                  <label>Biaya Pengiriman</label>
                  <p>
                    Rp{formatterNumber(parseInt(order.order_tracking_total))}
                  </p>
                </div>
              )}
              <div className="sub-detail header">
                <label>Biaya Admin</label>
                <p>Rp{formatterNumber(parseInt(order.order_admin_amount))}</p>
              </div>
              <div className="sub-detail total">
                <label>Total</label>
                <p>
                  Rp
                  {formatterNumber(
                    parseInt(order.order_amount) +
                      parseInt(order.order_admin_amount) +
                      parseInt(order.order_tracking_total ?? 0) +
                      parseInt(order.order_tracking_insurance ?? 0)
                  )}
                </p>
              </div>
            </div>
            <div className={`button-voucher-payment`}>
              <button onClick={() => setIsModalPayment(true)}>
                <span className="label-info">
                  <Image
                    src={`/images/payment.png`}
                    alt="payment"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                  {!payment.method_id && 'Pilih Metode Pembayaran'}
                  {payment.method_id &&
                    `${payment.method_name} - ${payment.va_bank}`}
                </span>
                <span className="my-icon">
                  <ChevronRight />
                </span>
              </button>
            </div>
            <hr />
            <div className="confirmation-area">
              <Checkbox
                checked={checked}
                onChange={onChange}
                disabled={!payment.method_id}
              >
                Dengan ini saya menyetujui Syarat dan Ketentuan yang berlaku
              </Checkbox>
              <button
                className="confirmation-button"
                onClick={() => checkPin()}
                disabled={checked ? false : true}
              >
                Proses Pembayaran
              </button>
            </div>
          </div>
        </div>
      </div>
      <KeranjangModalPayment
        isModalOpen={isModalPayment}
        setIsModalOpen={setIsModalPayment}
        payment={payment}
        setPayment={setPayment}
        order={order}
      />
      <KeranjangModalPin
        isModalOpen={isModalPinOpen}
        setIsModalOpen={setIsModalPinOpen}
        onSucces={() => processPayment()}
      />
    </>
  );
};

export default KeranjangPaymentDetailTransaksiView;

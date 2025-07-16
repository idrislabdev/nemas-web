'use client';
import { DeliveryTrucIcon } from '@/@core/components/custom-icons';
import { ChevronRight } from '@untitled-ui/icons-react';
import Image from 'next/image';
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import ModalShipment from './modal-shipment';
import axiosInstance from '@/@core/utils/axios';
import {
  IDeliveryService,
  IOrder,
  IShippingService,
} from '@/@core/@types/interface';
import { formatterNumber } from '@/@core/utils/general';
import dynamic from 'next/dynamic';

const ModalAddress = dynamic(
  () => import('@/@core/components/modals/modal-address'),
  { ssr: false }
);

const KeranjangShipping = (props: {
  setView: Dispatch<SetStateAction<string>>;
  summary: number;
  totalWeight: number;
  order: IOrder;
  setOrder: Dispatch<SetStateAction<IOrder>>;
  selectedMethod: string;
}) => {
  const { setView, summary, order, setOrder, selectedMethod } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAddressOpen, setIsModalAddressOpen] = useState(false);
  const [shippingServices, setShippingServices] = useState<IShippingService[]>(
    [] as IShippingService[]
  );
  const [selectedService, setSelectedService] = useState<IShippingService>(
    {} as IShippingService
  );

  const fetchData = useCallback(async () => {
    const body = {
      amount: summary,
      // weight: totalWeight
      weight: 1,
      delivery_partner_code: selectedMethod,
    };
    const respDelivery = await axiosInstance.get(
      `core/delivery_partner/service/?limit=100&offset=0`
    );
    const dataDelivery: IDeliveryService[] = respDelivery.data.results;
    const resp = await axiosInstance.post(`orders/fix/shipping/service/`, body);
    const { data } = resp;
    data.services.forEach((item: IShippingService) => {
      const check = dataDelivery.find(
        (x: IDeliveryService) =>
          x.delivery_partner_service_code == item.service_type_code
      );
      if (check) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    setShippingServices(data.services);
  }, [summary]);

  const onConfirmShipping = async () => {
    setView('payment');
  };

  const onSelectService = async (service: IShippingService) => {
    setSelectedService(service);
    setIsModalOpen(false);
    console.log(service);
    const resp = await axiosInstance.get(
      `core/delivery_partner/service/?limit=10&offset=0&delivery_partner_service_code__icontains=${service.service_type_code}`
    );
    const { results } = resp.data;
    if (results.length > 0) {
      const temp = results[0];
      console.log(temp);
      setOrder({
        ...order,
        tracking_courier_service_id: temp.delivery_partner_service_id,
        tracking_courier_service_code: temp.delivery_partner_service_code,
        tracking_courier_id: temp.delivery_partner,
        order_tracking_insurance: service.insurance_cost_round.toString(),
        order_tracking_total: (
          service.total_cost_round - service.insurance_cost_round
        ).toString(),
      });
    }
  };

  useEffect(() => {
    if (selectedMethod === 'MANDIRI') {
      const temp = selectedService;
      temp.insurance_cost_round = 0;
      temp.insurance_admin_cost = 0;
      temp.service_type_code = 'MANDIRI';
      onSelectService(temp);
    } else {
      fetchData();
    }
  }, [fetchData]);

  return (
    <>
      <div className="header-section">
        <h2>Metode Pengiriman</h2>
      </div>
      <div className="main-shipping-section">
        <div className="main-container">
          <div className="payment-type">
            <Image
              src={`/images/courier.png`}
              alt="courier"
              width={0}
              height={0}
              sizes="100%"
            />
            <p>Pengiriman by Kurir</p>
          </div>
          <p className="text-notice">
            Isi alamat tujuan dan pilihlah ekspedisi untuk pengiriman
          </p>
          <div className="text-address">
            <div className="title">
              <label>Alamat Pengiriman</label>
              <a
                onClick={() => setIsModalAddressOpen(true)}
                className="cursor-pointer"
              >
                Ubah Alamat
              </a>
            </div>
            <input value={order.order_pickup_address} disabled />
          </div>
          {selectedMethod !== 'MANDIRI' && (
            <div className="shipment-type">
              <h5 className="title">Jasa Pengiriman</h5>
              <hr />
              <div className="shipment-info">
                <a onClick={() => setIsModalOpen(true)}>
                  <span className="text">
                    <DeliveryTrucIcon />
                    {!selectedService.service_type_code && `Pilih Ekspedisi`}
                    {selectedService.service_type_code &&
                      `${
                        selectedService.service_type_code
                      } - Rp${formatterNumber(
                        selectedService.total_cost_round -
                          selectedService.insurance_cost_round
                      )}`}
                  </span>
                  <span className="icon">
                    <ChevronRight />
                  </span>
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="footer-container">
          <div className="summary-info">
            <label>Total Pembayaran</label>
            <p>Rp {formatterNumber(summary)}</p>
          </div>
          <button
            onClick={() => onConfirmShipping()}
            disabled={!selectedService.service_type_code ? true : false}
          >
            Konfirmasi Pesanan
          </button>
        </div>
      </div>
      <ModalShipment
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        shippingServices={shippingServices}
        selectedService={selectedService}
        onVoid={onSelectService}
      />
      <ModalAddress
        isModalOpen={isModalAddressOpen}
        setIsModalOpen={setIsModalAddressOpen}
        order={order}
        setOrder={setOrder}
      />
    </>
  );
};

export default KeranjangShipping;

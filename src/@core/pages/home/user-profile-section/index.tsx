'use client';

import { IGoldPrice, IUserProp } from '@/@core/@types/interface';
import ModalPlaystore from '@/@core/components/modals/modal-playstore';
import { useGlobals } from '@/@core/hoc/useGlobals';
import axiosInstance from '@/@core/utils/axios';
import { formatterNumber, formatterNumber2 } from '@/@core/utils/general';
import { User03 } from '@untitled-ui/icons-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const HomeUserProfileSection = (props: { userProps: IUserProp }) => {
  const { userProps } = props;
  const [dataGold, setDataGold] = useState<IGoldPrice>({} as IGoldPrice);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { globals } = useGlobals();
  useEffect(() => {
    axiosInstance.get(`/core/gold/price/active`).then((response) => {
      const data = response.data;
      setDataGold(data);
    });
  }, [setDataGold]);

  return (
    <>
      <div className="home-user-profile-section">
        <div className="profile-container">
          <span>
            <User03 />
          </span>
          <div className="profile-desc">
            <h5>Hi, {userProps.name}</h5>
            <p>Siap untuk menabung emas hari ini?</p>
          </div>
        </div>
        {globals.userProp.gold_stock && globals.userProp.wallet && (
          <div className="savings-container">
            <div className="saving-card golds">
              {globals.userProp.gold_stock.weight > 0 &&
                globals.userProp.gold_stock.weight <= 0.5 && (
                  <Image
                    src={`/images/golds/gold-1.png`}
                    alt="golds"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                )}
              {globals.userProp.gold_stock.weight > 0.5 &&
                globals.userProp.gold_stock.weight <= 1 && (
                  <Image
                    src={`/images/golds/gold-2.png`}
                    alt="golds"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                )}
              {globals.userProp.gold_stock.weight > 1 &&
                globals.userProp.gold_stock.weight <= 5 && (
                  <Image
                    src={`/images/golds/gold-3.png`}
                    alt="golds"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                )}
              {globals.userProp.gold_stock.weight > 5 &&
                globals.userProp.gold_stock.weight <= 10 && (
                  <Image
                    src={`/images/golds/gold-4.png`}
                    alt="golds"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                )}
              {globals.userProp.gold_stock.weight > 10 &&
                globals.userProp.gold_stock.weight <= 50 && (
                  <Image
                    src={`/images/golds/gold-5.png`}
                    alt="golds"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                )}
              {globals.userProp.gold_stock.weight > 50 && (
                <Image
                  src={`/images/golds/gold-6.png`}
                  alt="golds"
                  width={0}
                  height={0}
                  sizes="100%"
                />
              )}
              <div className="description">
                <h5>Tabungan Emas</h5>
                <p>
                  {globals.userProp && globals.userProp.gold_stock
                    ? globals.userProp.gold_stock.weight
                        .toString()
                        .replace('.', ',')
                    : ''}{' '}
                  Gram
                </p>
                <span>
                  ≈Rp
                  {formatterNumber2(
                    (
                      globals.userProp.gold_stock.weight *
                      (dataGold.gold_price_sell ? dataGold.gold_price_sell : 0)
                    )
                      .toFixed(3)
                      .toString()
                      .replace('.', ',')
                  )}
                </span>
              </div>
            </div>
            <div className="saving-card gold-money">
              <Image
                src={`/images/gold-money.png`}
                alt="gold and money"
                width={0}
                height={0}
                sizes="100%"
              />
              <div className="description">
                <h5>Saldo Uang</h5>
                <p>Rp {formatterNumber(globals.userProp.wallet.balance)}</p>
                <button onClick={() => setIsModalOpen(true)}>
                  Topup Saldo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <ModalPlaystore
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default HomeUserProfileSection;

'use client';

import { SearchSm, ShoppingCart03 } from '@untitled-ui/icons-react';
import { Input, message } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import '@/styles/produk.css';
import Image from 'next/image';
import { IGold, IUserLogin } from '@/@core/@types/interface';
import debounce from 'debounce';
import axiosInstance from '@/@core/utils/axios';
import { useRouter } from 'next/navigation';
import { formatterNumber } from '@/@core/utils/general';
import { useGlobals } from '@/@core/hoc/useGlobals';

const ProdukPageWrapper = () => {
  const router = useRouter();
  const [golds, setGolds] = useState<IGold[]>([]);
  const [user, setUser] = useState<IUserLogin>();
  const [messageApi, contextHolder] = message.useMessage();
  const { globals, saveGlobals } = useGlobals();

  const [params, setParams] = useState({
    format: 'json',
    offset: 0,
    limit: 100,
    brand__icontains: '',
  });

  // 🟡 Tambahan: filter berdasarkan brand dari tombol logo
  const handleFilterBrand = (brand: string) => {
    setParams({
      ...params,
      offset: 0,
      limit: 100,
      brand__icontains: brand,
    });
  };

  const fetchData = useCallback(async () => {
    const respActive = await axiosInstance.get(`/core/gold/price/active`);
    const active = respActive.data;

    const resp = await axiosInstance.get(`/core/gold/list/product-show`, {
      params,
    });

    const { results } = resp.data;

    results.forEach((item: IGold) => {
      let addOn = 100000;
      if (item.brand == 'Antam') addOn = 125000;

      item.price =
        (Math.ceil(active.gold_price_buy) + addOn) * item.gold_weight;
    });

    setGolds(resp.data.results);
  }, [params]);

  const handleFilter = (value: string) => {
    setParams({
      ...params,
      offset: 0,
      limit: 100,
      brand__icontains: value,
    });
  };

  const successCart = () => {
    messageApi.open({
      type: 'success',
      content: 'Berhasil menambahkan barang dalam keranjang',
      duration: 10,
    });
  };

  const addToCart = async (item: IGold) => {
    if (user && user.name) {
      const body = {
        gold_id: item.gold_id,
        quantity: 1,
        order_type: 'buy',
      };

      await axiosInstance.post('/orders/fix/cart/add/', body);

      const resp = await axiosInstance.get(
        '/orders/fix/cart/detail/?order_type=buy&offset=0&limit=100'
      );

      const { results } = resp.data;
      localStorage.setItem('cart_count', results.length);
      saveGlobals({ ...globals, cartCount: results.length });

      successCart();
    } else {
      router.push('/login');
    }
  };

  useEffect(() => {
    const temp: IUserLogin = JSON.parse(localStorage.getItem('user') || '{}');
    setUser(temp);
  }, [setUser]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main className="produk-page sm:mobile-responsive md:mobile-responsive">
      {contextHolder}
      <div className="header-section">
        <h2>Produk Emas Fisik</h2>

        <div className="filter-area flex items-center gap-4">
          <Input
            prefix={
              <span>
                <SearchSm />
              </span>
            }
            size="large"
            onChange={debounce(
              (event) => handleFilter(event.target.value),
              1000
            )}
          />

          {/* 🟡 Logo Filter Brand */}
          <div className="flex items-center gap-2">
            <button
              className="w-[60px] h-[60px] rounded-md shadow-md p-1"
              onClick={() => handleFilterBrand('')}
            >
              <Image
                src={`/images/nemas-logo.jpeg`}
                className="w-full h-full rounded-md object-contain"
                alt="nemas-logo"
                width={0}
                height={0}
                sizes="100%"
              />
            </button>

            <button
              className="w-[150px] h-[60px] rounded-md shadow-md p-1"
              onClick={() => handleFilterBrand('Antam')}
            >
              <Image
                src={`/images/antam-logo.jpeg`}
                className="w-full h-full rounded-md object-contain"
                alt="antam-logo"
                width={0}
                height={0}
                sizes="100%"
              />
            </button>

            <button
              className="w-[80px] h-[60px] rounded-md shadow-md p-1"
              onClick={() => handleFilterBrand('Marva')}
            >
              <Image
                src={`/images/marva-logo.jpeg`}
                className="w-full h-full rounded-md object-contain"
                alt="marva-logo"
                width={0}
                height={0}
                sizes="100%"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="product-section">
        {golds.map((item, index: number) => (
          <div className="card-wrapper" key={index}>
            <div className="card-product">
              <div className="image">
                <Image
                  src={
                    item.gold_image_1 != ''
                      ? item.gold_image_1
                      : `/images/dummy-product.png`
                  }
                  alt="image1"
                  width={0}
                  height={0}
                  sizes="100%"
                />
              </div>

              <div className="description">
                <div className="label">
                  <label>{item.brand}</label>
                  <span>{parseFloat(item.gold_weight.toString())} Gr</span>
                </div>

                <p>Rp{formatterNumber(item.gold_price_summary_roundup)}</p>

                <button
                  onClick={() => addToCart(item)}
                  disabled={item.stock < 1}
                >
                  {item.stock > 0 ? (
                    <>
                      <span className="my-icon icon-sm">
                        <ShoppingCart03 />
                      </span>{' '}
                      Tambah ke Keranjang
                    </>
                  ) : (
                    'Stok Kosong'
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProdukPageWrapper;

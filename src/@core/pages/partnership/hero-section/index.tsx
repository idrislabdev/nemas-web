'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PartnerHeroSection = () => {
  return (
    <>
      <div className="partner-hero-section">
        <div className="banner-container">
          <div className="text-area">
            <div className="title">
              <h2>Punya Toko Emas?</h2>
              <h2>
                Yuk, Jadi <span>Member Nemas!</span>
              </h2>
            </div>
            <p>
              Gabung sebagai mitra resmi Nemas dan mulai dapat fee dari setiap
              transaksi pembelian emas yang dilakukan user melalui toko Anda.
            </p>
            <Link href={`/partnership/register`} className="cursor-pointer">
              Daftar Jadi Toko Member Nemas
            </Link>
            <div className="benefits">
              <div className="benefit-content">
                <h5>Dapat Fee/Komisi</h5>
                <p>
                  Dari setiap pembelian emas yang memilih toko Anda di aplikasi
                </p>
              </div>
              <div className="benefit-content">
                <h5>Jual Emas Fisik Langsung</h5>
                <p>User bisa beli emas fisik di toko Anda</p>
              </div>
              <div className="benefit-content">
                <h5>Pembayaran Aman & Terintegrasi</h5>
                <p>Lewat transfer member di mobile app Nemas</p>
              </div>
              <div className="benefit-content">
                <h5>No Risk, Komisi Pasif</h5>
                <p>
                  Jual emas tanpa modal & tanpa stok. No risk,
                  komisi jalan terus.
                </p>
              </div>
            </div>
          </div>
          <Image
            src={`/images/gold-pieces.png`}
            alt={`hero banner`}
            width={0}
            height={0}
            sizes="100%"
          />
        </div>
      </div>
    </>
  );
};

export default PartnerHeroSection;

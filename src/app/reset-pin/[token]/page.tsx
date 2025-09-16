'use client';
import { Eye, EyeOff } from '@untitled-ui/icons-react';
import { Input } from 'antd';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

const ResetPinToken = () => {
  const params = useParams<{ token: string }>();
  const [pin, setPin] = useState<string>('');
  const [confirmPin, setConfirmPin] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [seePin, setSeePin] = useState<boolean>(false);
  const [seeConfirmPin, setSeeConfirmPin] = useState<boolean>(false);
  const handleResetPin = () => {
    if (pin !== confirmPin) {
      alert('pin dan konfirmasi pin harus sama');
    } else {
      setLoading(true);
      axios
        .post(
          `https://www.nemas.id/api/users/token/reset-token/${params.token}/`,
          {
            new_data: pin,
            new_data_type: 'PIN',
          }
        )
        .then((response) => {
          console.log(response);
          setLoading(false);
          const message: string = response.data.message;
          alert(message);
          window.location.href = '/login';
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          const message: string = err.response.data.detail;
          alert(message);
        });
    }
  };

  return (
    <div className="flex flex-col justify-center bg-white  h-screen">
      {/* {params.token} */}
      <div
        className="flex flex-col ustify-center rounded-[8px] max-w-container mx-auto gap-[20px] p-[40px] w-[350px] "
        style={{
          boxShadow:
            'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        }}
      >
        <div className="flex flex-col gap-[8px] text-center items-center">
          <h5 className="text-2xl text-center text-neutral-900 font-semibold">
            Reset PIN
          </h5>
          <p className="text-sm text-neutral-600">
            Silahkan masukkan pin baru anda untuk mereset pin anda sebelumnya
          </p>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-col">
            <label className="text-sm text-neutral-900">PIN Baru</label>

            <Input
              type={seePin ? 'text' : 'password'}
              inputMode="numeric"
              minLength={6}
              maxLength={6}
              placeholder="Masukkan PIN Baru"
              className="mt-2 p-2 rounded w-full text-black"
              value={pin}
              onChange={(e) => {
                const numberRegex = /^\d+$/;
                if (numberRegex.test(e.target.value) || e.target.value === '') {
                  setPin(e.target.value);
                } else {
                  alert('Hanya boleh memasukkan angka');
                }
              }}
              suffix={
                <a onClick={() => setSeePin(!seePin)}>
                  <span className="my-icon icon-sm text-neutral-500">
                    {seePin ? <Eye /> : <EyeOff />}
                  </span>
                </a>
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-col">
            <label className="text-sm text-neutral-900">
              Konfirmasi PIN Baru
            </label>
            <Input
              type={seeConfirmPin ? 'text' : 'password'}
              pattern="[0-9]*"
              inputMode="numeric"
              minLength={6}
              maxLength={6}
              placeholder="Masukkan Konfirmasi PIN Baru"
              className="mt-2 p-2 rounded w-full text-black"
              value={confirmPin}
              onChange={(e) => {
                const numberRegex = /^\d+$/;
                if (numberRegex.test(e.target.value) || e.target.value === '') {
                  setConfirmPin(e.target.value);
                } else {
                  alert('Hanya boleh memasukkan angka');
                }
              }}
              suffix={
                <a onClick={() => setSeeConfirmPin(!seeConfirmPin)}>
                  <span className="my-icon icon-sm text-neutral-500">
                    {seeConfirmPin ? <Eye /> : <EyeOff />}
                  </span>
                </a>
              }
            />
          </div>
        </div>
        <button
          className={`${
            pin === '' || confirmPin === '' ? 'bg-gray-200' : 'bg-primary'
          } text-white p-2 mt-2 rounded`}
          disabled={pin === '' || confirmPin === '' || loading === true}
          onClick={handleResetPin}
        >
          {loading ? 'Loading...' : 'Ubah Pin'}
        </button>
      </div>
    </div>
  );
};

export default ResetPinToken;

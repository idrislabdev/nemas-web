'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { Eye, EyeOff } from '@untitled-ui/icons-react';
import { Input } from 'antd';

const ResetPasswordToken = () => {
  const params = useParams<{ token: string }>();
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showingAlertFailed, setShowingAlertFailed] = useState<boolean>(false);
  const [showingAlertSuccess, setShowingAlertSuccess] =
    useState<boolean>(false);
  const [alertDesc, setAlertDesc] = useState<string>('');
  const [seePass, setSeePass] = useState<boolean>(false);
  const [seeConfirmPass, setSeeConfirmPass] = useState<boolean>(false);

  const handleResetPassword = () => {
    if (password !== confirmPassword) {
      setShowingAlertFailed(true);
      setAlertDesc('password dan konfirmasi password harus sama');
    } else {
      const passwordRegex =
        /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$/;
      if (!passwordRegex.test(password)) {
        setShowingAlertFailed(true);
        setAlertDesc(
          'Password harus mengandung 8-16 karakter, 1 angka (0-9), 1 huruf besar (A-Z), dan 1 karakter spesial contoh @'
        );
      } else {
        setLoading(true);
        axios
          .post(
            `https://www.nemas.id/api/users/token/reset-token/${params.token}/`,
            {
              new_data: password,
              new_data_type: 'Password',
            }
          )
          .then((response) => {
            console.log(response);
            setLoading(false);
            const message: string = response.data.message;
            setShowingAlertFailed(false);
            setShowingAlertSuccess(true);
            setAlertDesc(message);
            window.location.href = '/login';
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            const message: string = err.response.data.detail;
            setShowingAlertFailed(true);
            setShowingAlertSuccess(false);
            setAlertDesc(message);
          });
      }
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
            Reset Password
          </h5>
          <p className="text-sm text-neutral-600">
            Silahkan masukkan password baru anda untuk mereset password anda
            sebelumnya
          </p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-col">
            <label className="text-sm text-neutral-900">Password Baru</label>
            <Input
              type={seePass ? 'text' : 'password'}
              placeholder="Masukkan Password Baru"
              className="mt-2 p-2 rounded w-full text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              suffix={
                <a onClick={() => setSeePass(!seePass)}>
                  <span className="my-icon icon-sm text-neutral-500">
                    {seePass ? <Eye /> : <EyeOff />}
                  </span>
                </a>
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-neutral-900">
              Konfirm Password Baru
            </label>
            <Input
              type={seeConfirmPass ? 'text' : 'password'}
              placeholder="Masukkan Konfirmasi Password Baru"
              className="mt-2 p-2 rounded w-full text-black"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              suffix={
                <a onClick={() => setSeeConfirmPass(!seeConfirmPass)}>
                  <span className="my-icon icon-sm text-neutral-500">
                    {seeConfirmPass ? <Eye /> : <EyeOff />}
                  </span>
                </a>
              }
            />
          </div>
        </div>
        <button
          className={` ${
            password === '' || confirmPassword === ''
              ? 'bg-gray-200'
              : 'bg-primary'
          } text-white p-2 mt-2 rounded`}
          disabled={
            password === '' || confirmPassword === '' || loading === true
          }
          onClick={handleResetPassword}
        >
          {loading ? 'Loading...' : 'Ubah Password'}
        </button>
        {(showingAlertFailed || showingAlertSuccess) && (
          <div
            className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2`}
            role="alert"
          >
            {alertDesc}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordToken;

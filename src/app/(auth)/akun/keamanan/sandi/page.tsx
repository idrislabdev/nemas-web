'use client';
import { useGlobals } from '@/@core/hoc/useGlobals';
import axiosInstance from '@/@core/utils/axios';
import { Input, message } from 'antd';
import React, { useState } from 'react';
import { Eye, EyeOff } from '@untitled-ui/icons-react';

const UserKeamananSandiPage = () => {
  const { globals } = useGlobals();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // state untuk show/hide
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const changePassword = () => {
    const body = {
      name: globals.userLogin.name,
      email: globals.userLogin.email,
      phone_number: globals.userLogin.phone_number,
      password: password,
    };

    axiosInstance.put(`users/me/`, body).then(() => {
      setPassword('');
      setConfirmPassword('');
      messageApi.open({
        type: 'success',
        content: 'Kata sandi berhasil dirubah',
        duration: 6,
      });
    });
  };

  return (
    <>
      {contextHolder}
      <div className="keamanan-sub-container">
        <h5>Keamanan Akun</h5>

        <div className="form-group">
          <h6>Ubah Kata Sandi</h6>

          {/* PASSWORD */}
          <div className="group-input">
            <label>Password</label>
            <Input
              type={showPassword ? 'text' : 'password'}
              size="large"
              value={password}
              placeholder="Masukkan Password"
              onChange={(e) => setPassword(e.target.value)}
              suffix={
                <a onClick={() => setShowPassword(!showPassword)}>
                  <span className="my-icon icon-sm text-[#8D989D]">
                    {showPassword ? <EyeOff /> : <Eye />}
                  </span>
                </a>
              }
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="group-input">
            <label>Konfirmasi Password</label>
            <Input
              type={showConfirm ? 'text' : 'password'}
              size="large"
              value={confirmPassword}
              placeholder="Konfirmasi Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              suffix={
                <a onClick={() => setShowConfirm(!showConfirm)}>
                  <span className="my-icon icon-sm text-[#8D989D]">
                    {showConfirm ? <EyeOff /> : <Eye />}
                  </span>
                </a>
              }
            />

            <div className="note">
              <p>Password harus mengandung setidaknya:</p>
              <span>*) 8–16 Karakter</span>
              <span>*) 1 Angka (0–9)</span>
              <span>*) 1 Huruf besar (A–Z)</span>
              <span>*) 1 Karakter spesial (!, @, #, ...)</span>
            </div>
          </div>
        </div>

        <button
          onClick={changePassword}
          disabled={
            password !== confirmPassword ||
            password === '' ||
            confirmPassword === ''
          }
        >
          Ubah Kata Sandi
        </button>
      </div>
    </>
  );
};

export default UserKeamananSandiPage;

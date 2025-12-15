'use client';

import ModalLoading from '@/@core/components/modals/modal-loading';
import axiosInstance from '@/@core/utils/axios';
import axios from 'axios';
import { notification } from 'antd';
import { AxiosError } from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Eye, EyeOff } from '@untitled-ui/icons-react';

interface IForm {
  name?: string;
  username?: string;
  password?: string;
  email?: string;
  address?: string;
  province?: string;
  city?: string;
  phone_number?: string;
  toko_name?: string;
  npwp?: string;
  nib?: string;
  photo_ktp?: string;
  file_nib?: string;
  file_npwp?: string;
  file_contact_person?: string;
  photo_ktp_url?: string;
}

interface Province {
  province_id: number;
  province_name: string;
}

interface City {
  city_name: string;
  province_name: string;
}

const RegisterTokoForm = () => {
  const url = `/users/user/seller`;

  // ===== INPUT STATE =====
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [npwp, setNpwp] = useState('');
  const [tokoName, setTokoName] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [address, setAddress] = useState('');
  const [nib, setNib] = useState('');

  // ===== FILE STATE =====
  const [fileNpwp, setFileNpwp] = useState<File | null>(null);
  const [fileNib, setFileNib] = useState<File | null>(null);
  const [fileContactPerson, setFileContactPerson] = useState<File | null>(null);
  const [photoKtp, setPhotoKtp] = useState<File | null>(null);

  // ===== ADDRESS DATA =====
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  // ===== UI STATE =====
  const [loading, setLoading] = useState(false);
  const [required, setRequired] = useState<IForm>({});
  const [api, contextHolder] = notification.useNotification();

  // ===== FILE REF =====
  const fileNibRef = useRef<HTMLInputElement>(null);
  const fileNpwpRef = useRef<HTMLInputElement>(null);
  const fileContactPersonRef = useRef<HTMLInputElement>(null);
  const photoKtpRef = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState(false);

  // ================= FETCH PROVINCE =================
  useEffect(() => {
    const fetchProvince = async () => {
      const res = await axios.get(
        'https://www.nemas.id/api/core/address/province/?format=json&limit=1000'
      );
      setProvinces(res.data.results || []);
    };

    fetchProvince();
  }, []);

  // ================= FETCH CITY BY PROVINCE =================
  useEffect(() => {
    if (!province) {
      setCities([]);
      setCity('');
      return;
    }

    const fetchCity = async () => {
      const res = await axios.get(
        `https://www.nemas.id/api/core/address/city/?format=json&limit=2000&province__province_name__icontains=${province}`
      );
      setCities(res.data.results || []);
    };

    fetchCity();
  }, [province]);

  // ================= UPLOAD FILE =================
  const uploadFile = async (file: File | null): Promise<string> => {
    if (!file) return '';
    const formData = new FormData();
    formData.append('file', file);

    const res = await axiosInstance.post(`${url}/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return res.data.file_url || res.data;
  };

  // ================= SAVE =================
  const onSave = async () => {
    setLoading(true);
    setRequired({});

    try {
      const formData = new FormData();

      formData.append('file_nib', await uploadFile(fileNib));
      formData.append('file_npwp', await uploadFile(fileNpwp));
      formData.append(
        'file_contact_person',
        await uploadFile(fileContactPerson)
      );
      formData.append('photo_ktp_url', await uploadFile(photoKtp));

      formData.append('name', name);
      formData.append('username', username);
      formData.append('password', password);
      formData.append('email', email);
      formData.append('phone_number', phoneNumber);
      formData.append('toko_name', tokoName);
      formData.append('npwp', npwp);
      formData.append('nib', nib);
      formData.append('address', address);
      formData.append('province', province);
      formData.append('city', city);

      await axiosInstance.post(`${url}/create`, formData);

      api.success({
        message: 'Data Toko',
        description: 'Data Toko berhasil disimpan',
        placement: 'bottomRight',
      });

      clearForm();
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.data) {
        setRequired(err.response.data as IForm);
      }
    } finally {
      setLoading(false);
    }
  };

  // ================= CLEAR FORM =================
  const clearForm = () => {
    setName('');
    setUsername('');
    setEmail('');
    setPhoneNumber('');
    setNpwp('');
    setNib('');
    setTokoName('');
    setPassword('');
    setAddress('');
    setProvince('');
    setCity('');
    setCities([]);

    setFileNib(null);
    setFileNpwp(null);
    setFileContactPerson(null);
    setPhotoKtp(null);

    if (fileNibRef.current) fileNibRef.current.value = '';
    if (fileNpwpRef.current) fileNpwpRef.current.value = '';
    if (fileContactPersonRef.current) fileContactPersonRef.current.value = '';
    if (photoKtpRef.current) photoKtpRef.current.value = '';
  };

  return (
    <main className="partner-page sm:mobile-responsive md:mobile-responsive">
      {contextHolder}

      <div className="registrasi-toko">
        <h5 className="title-registrasi">Registrasi Toko</h5>

        <div className="form-input">
          {/* ================= FORM ================= */}
          <div className="sub-form">
            <div className="form-area">
              {/* ===== NAMA & TOKO ===== */}
              <div className="flex gap-2 sm:flex-col">
                <div className="input-area w-1/2 sm:w-full">
                  <label className="flex gap-1">
                    Nama
                    {!required.name && <span className="text-xs">*</span>}
                    {required.name && (
                      <span className="text-red-500 text-xs italic">
                        {required.name}
                      </span>
                    )}
                  </label>
                  <input
                    value={name}
                    className={`base ${required.name ? 'error' : ''}`}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="input-area w-1/2 sm:w-full">
                  <label className="flex gap-1">
                    Nama Toko
                    {!required.toko_name && <span className="text-xs">*</span>}
                    {required.toko_name && (
                      <span className="text-red-500 text-xs italic">
                        {required.toko_name}
                      </span>
                    )}
                  </label>
                  <input
                    value={tokoName}
                    className={`base ${required.toko_name ? 'error' : ''}`}
                    onChange={(e) => setTokoName(e.target.value)}
                  />
                </div>
              </div>

              {/* ===== USERNAME & EMAIL ===== */}
              <div className="flex gap-2 sm:flex-col">
                <div className="input-area w-1/2 sm:w-full">
                  <label className="flex gap-1">
                    Username
                    {!required.username && <span className="text-xs">*</span>}
                    {required.username && (
                      <span className="text-red-500 text-xs italic">
                        {required.username}
                      </span>
                    )}
                  </label>
                  <input
                    value={username}
                    className={`base ${required.username ? 'error' : ''}`}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="input-area w-1/2 sm:w-full">
                  <label className="flex gap-1">
                    Password
                    {!required.password && <span className="text-xs">*</span>}
                    {required.password && (
                      <span className="text-red-500 text-xs italic">
                        {required.password}
                      </span>
                    )}
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      className={`base w-full ${
                        required.password ? 'error' : ''
                      }`}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <a
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <span className="my-icon icon-sm">
                        {showPassword ? <EyeOff /> : <Eye />}
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* ===== PHONE ===== */}
              <div className="flex gap-2 sm:flex-col">
                <div className="input-area w-1/2 sm:w-full">
                  <label className="flex gap-1">
                    Email
                    {!required.email && <span className="text-xs">*</span>}
                    {required.email && (
                      <span className="text-red-500 text-xs italic">
                        {required.email}
                      </span>
                    )}
                  </label>
                  <input
                    value={email}
                    className={`base ${required.email ? 'error' : ''}`}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input-area w-1/2 sm:w-full">
                  <label className="flex gap-1">
                    No. Telepon
                    {!required.phone_number && (
                      <span className="text-xs">*</span>
                    )}
                    {required.phone_number && (
                      <span className="text-red-500 text-xs italic">
                        {required.phone_number}
                      </span>
                    )}
                  </label>
                  <input
                    value={phoneNumber}
                    className={`base ${required.phone_number ? 'error' : ''}`}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              {/* ===== PROVINCE ===== */}
              <div className="input-area">
                <label className="flex gap-1">
                  Provinsi
                  {!required.province && <span className="text-xs">*</span>}
                  {required.province && (
                    <span className="text-red-500 text-xs italic">
                      {required.province}
                    </span>
                  )}
                </label>
                <select
                  value={province}
                  className={`base ${required.province ? 'error' : ''}`}
                  onChange={(e) => setProvince(e.target.value)}
                >
                  <option value="">Pilih Provinsi</option>
                  {provinces.map((p) => (
                    <option key={p.province_id} value={p.province_name}>
                      {p.province_name}
                    </option>
                  ))}
                </select>
              </div>

              {/* ===== CITY ===== */}
              <div className="input-area">
                <label className="flex gap-1">
                  Kota
                  {!required.city && <span className="text-xs">*</span>}
                  {required.city && (
                    <span className="text-red-500 text-xs italic">
                      {required.city}
                    </span>
                  )}
                </label>
                <select
                  value={city}
                  disabled={!province}
                  className={`base ${required.city ? 'error' : ''}`}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="">Pilih Kota</option>
                  {cities.map((c, i) => (
                    <option key={i} value={c.city_name}>
                      {c.city_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-area">
              {/* ===== ALAMAT TOKO ===== */}
              <div className="input-area">
                <label className="flex items-center gap-1">
                  Alamat Toko
                  {!required.address && (
                    <span className="text-xs text-gray-400">*</span>
                  )}
                  {required.address && (
                    <span className="text-red-500 text-xs italic">
                      {required.address?.toString()}
                    </span>
                  )}
                </label>

                <textarea
                  value={address}
                  className={`base ${required.address ? 'error' : ''}`}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              {/* ===== NIB ===== */}
              <div className="flex items-center gap-2 sm:flex-col">
                <div className="input-area w-1/2 sm:w-full">
                  <label className="flex items-center gap-1">
                    NIB
                    {!required.nib && (
                      <span className="text-xs text-gray-400">*</span>
                    )}
                    {required.nib && (
                      <span className="text-red-500 text-xs italic">
                        {required.nib?.toString()}
                      </span>
                    )}
                  </label>

                  <input
                    value={nib}
                    className={`base ${required.nib ? 'error' : ''}`}
                    onChange={(e) => setNib(e.target.value)}
                  />
                </div>

                <div className="input-area w-1/2 sm:w-full">
                  <label className="flex items-center gap-1">
                    File NIB
                    {!required.file_nib && (
                      <span className="text-xs text-gray-400">*</span>
                    )}
                    {required.file_nib && (
                      <span className="text-red-500 text-xs italic">
                        {required.file_nib?.toString()}
                      </span>
                    )}
                  </label>

                  <input
                    ref={fileNibRef}
                    type="file"
                    className={`base ${required.file_nib ? 'error' : ''}`}
                    accept=".png, .jpg,.jpeg,.pdf"
                    onChange={(e) => setFileNib(e.target.files?.[0] || null)}
                  />
                </div>
              </div>

              {/* ===== NPWP ===== */}
              <div className="flex items-center gap-2 sm:flex-col">
                <div className="input-area w-1/2 sm:w-full">
                  <label className="flex items-center gap-1">
                    NPWP
                    {!required.npwp && (
                      <span className="text-xs text-gray-400">*</span>
                    )}
                    {required.npwp && (
                      <span className="text-red-500 text-xs italic">
                        {required.npwp?.toString()}
                      </span>
                    )}
                  </label>

                  <input
                    value={npwp}
                    className={`base ${required.npwp ? 'error' : ''}`}
                    onChange={(e) => setNpwp(e.target.value)}
                  />
                </div>

                <div className="input-area w-1/2 sm:w-full">
                  <label className="flex items-center gap-1">
                    File NPWP
                    {!required.file_npwp && (
                      <span className="text-xs text-gray-400">*</span>
                    )}
                    {required.file_npwp && (
                      <span className="text-red-500 text-xs italic">
                        {required.file_npwp?.toString()}
                      </span>
                    )}
                  </label>

                  <input
                    ref={fileNpwpRef}
                    type="file"
                    className={`base ${required.file_npwp ? 'error' : ''}`}
                    accept=".png, .jpg,.jpeg,.pdf"
                    onChange={(e) => setFileNpwp(e.target.files?.[0] || null)}
                  />
                </div>
              </div>

              {/* ===== FILE CONTACT PERSON & KTP ===== */}
              <div className="flex items-center gap-2 sm:flex-col">
                <div className="input-area w-1/2 sm:w-full">
                  <label className="flex items-center gap-1">
                    File Contact Person
                    {!required.file_contact_person && (
                      <span className="text-xs text-gray-400">*</span>
                    )}
                    {required.file_contact_person && (
                      <span className="text-red-500 text-xs italic">
                        {required.file_contact_person?.toString()}
                      </span>
                    )}
                  </label>

                  <input
                    ref={fileContactPersonRef}
                    type="file"
                    className={`base ${
                      required.file_contact_person ? 'error' : ''
                    }`}
                    accept=".png, .jpg,.jpeg,.pdf"
                    onChange={(e) =>
                      setFileContactPerson(e.target.files?.[0] || null)
                    }
                  />
                </div>

                <div className="input-area w-1/2 sm:w-full">
                  <label className="flex items-center gap-1">
                    Foto KTP
                    {!required.photo_ktp_url && (
                      <span className="text-xs text-gray-400">*</span>
                    )}
                    {required.photo_ktp_url && (
                      <span className="text-red-500 text-xs italic">
                        {required.photo_ktp_url?.toString()}
                      </span>
                    )}
                  </label>

                  <input
                    ref={photoKtpRef}
                    type="file"
                    className={`base ${required.photo_ktp_url ? 'error' : ''}`}
                    accept=".png, .jpg,.jpeg,.pdf"
                    onChange={(e) => setPhotoKtp(e.target.files?.[0] || null)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-button">
            <button className="btn btn-primary" onClick={onSave}>
              Ajukan Data
            </button>
          </div>
        </div>
      </div>

      <ModalLoading
        isModalOpen={loading}
        textInfo="Harap tunggu, pengajuan sedang diproses"
      />
    </main>
  );
};

export default RegisterTokoForm;

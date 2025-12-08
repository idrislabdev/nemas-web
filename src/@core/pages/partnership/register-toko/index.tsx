'use client';

import ModalLoading from '@/@core/components/modals/modal-loading';
import axiosInstance from '@/@core/utils/axios';
import { notification } from 'antd';
import { AxiosError } from 'axios';
import React, { useState, useRef } from 'react';

const RegisterTokoForm = () => {
  interface IForm {
    name?: string;
    address?: string;
    province?: string;
    city?: string;
    phone_number?: string;
    toko_name?: string;
    npwp?: string;
    nip?: string;
  }

  const url = `/users/user/seller`;

  // input state
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [npwp, setNpwp] = useState('');
  const [tokoName, setTokoName] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [address, setAddress] = useState('');
  const [nib, setNib] = useState('');

  const [fileNpwp, setFileNpwp] = useState<File | null>(null);
  const [fileNib, setFileNib] = useState<File | null>(null);
  const [fileContactPerson, setFileContactPerson] = useState<File | null>(null);
  const [photoKtp, setPhotoKtp] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const [required, setRequired] = useState<IForm>({} as IForm);
  const [api, contextHolder] = notification.useNotification();

  // Refs untuk membersihkan input file
  const fileNibRef = useRef<HTMLInputElement>(null);
  const fileNpwpRef = useRef<HTMLInputElement>(null);
  const fileContactPersonRef = useRef<HTMLInputElement>(null);
  const photoKtpRef = useRef<HTMLInputElement>(null);

  // const onCancel = () => {
  //   setRequired({} as IForm);
  //   clearForm();
  // };

  const onSave = async () => {
    setLoading(true);
    const formData = new FormData();

    const urlNib = await uploadFile(fileNib);
    const urlNpwp = await uploadFile(fileNpwp);
    const urlContactperson = await uploadFile(fileContactPerson);
    const urlKtp = await uploadFile(photoKtp);

    formData.append('name', name);
    formData.append('npwp', npwp);
    formData.append('nib', nib);
    formData.append('toko_name', tokoName);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('province', province);
    formData.append('phone_number', phoneNumber);
    formData.append('file_nib', urlNib);
    formData.append('file_npwp', urlNpwp);
    formData.append('file_contact_person', urlContactperson);
    formData.append('photo_ktp_url', urlKtp);

    setRequired({} as IForm);

    try {
      await axiosInstance.post(`${url}/create`, formData);
      api.info({
        message: 'Data Toko',
        description: 'Data Toko Telah Disimpan',
        placement: 'bottomRight',
      });
      clearForm();
      setLoading(false);
    } catch (error) {
      const err = error as AxiosError;
      if (err.response && err.response.data) {
        const data: IForm = err.response.data;
        setRequired(data);
        setLoading(false);
      }
    }
  };

  const uploadFile = async (file: File | null): Promise<string> => {
    if (!file) return '';
    const formData = new FormData();
    formData.append('file', file);
    const resp = await axiosInstance.post(`${url}/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return resp.data.file_url || resp.data;
  };

  // RESET FORM + FILE INPUT
  const clearForm = () => {
    setName('');
    setNib('');
    setNpwp('');
    setTokoName('');
    setPhoneNumber('');
    setAddress('');
    setCity('');
    setProvince('');

    // reset state file
    setFileContactPerson(null);
    setFileNib(null);
    setFileNpwp(null);
    setPhotoKtp(null);

    // reset tampilan input file
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
          <div className="sub-form">
            <div className="form-area">
              <div className="input-area">
                <label>
                  Nama <span className="text-xs text-gray-400">*</span>{' '}
                </label>
                <div className="flex flex-col">
                  <input
                    value={name}
                    className={`base ${required.name ? 'error' : ''}`}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {required.name && (
                    <span className="text-red-500 text-xs italic">
                      {required.name?.toString()}
                    </span>
                  )}
                </div>
              </div>
              <div className="input-area">
                <label>
                  No. Telepon <span className="text-xs text-gray-400">*</span>{' '}
                </label>
                <div className="flex flex-col">
                  <input
                    value={phoneNumber}
                    className={`base ${required.phone_number ? 'error' : ''}`}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  {required.phone_number && (
                    <span className="text-red-500 text-xs italic">
                      {required.phone_number?.toString()}
                    </span>
                  )}
                </div>
              </div>
              <div className="input-area">
                <label>
                  Nama Toko <span className="text-xs text-gray-400">*</span>{' '}
                </label>
                <div className="flex flex-col">
                  <input
                    value={tokoName}
                    className={`base ${required.toko_name ? 'error' : ''}`}
                    onChange={(e) => setTokoName(e.target.value)}
                  />
                  {required.toko_name && (
                    <span className="text-red-500 text-xs italic">
                      {required.toko_name?.toString()}
                    </span>
                  )}
                </div>
              </div>
              <div className="input-area">
                <label>
                  Kota <span className="text-xs text-gray-400">*</span>{' '}
                </label>
                <div className="flex flex-col">
                  <input
                    value={city}
                    className={`base ${required.city ? 'error' : ''}`}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  {required.city && (
                    <span className="text-red-500 text-xs italic">
                      {required.city?.toString()}
                    </span>
                  )}
                </div>
              </div>
              <div className="input-area">
                <label>
                  Provinsi <span className="text-xs text-gray-400">*</span>{' '}
                </label>
                <div className="flex flex-col">
                  <input
                    value={province}
                    className={`base ${required.province ? 'error' : ''}`}
                    onChange={(e) => setProvince(e.target.value)}
                  />
                  {required.province && (
                    <span className="text-red-500 text-xs italic">
                      {required.province?.toString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="form-area">
              <div className="input-area">
                <label>
                  Alamat Toko <span className="text-xs text-gray-400">*</span>{' '}
                </label>
                <div className="flex flex-col">
                  <textarea
                    value={address}
                    className={`base`}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 sm:flex-col">
                <div className="input-area w-1/2 sm:w-full">
                  <label>
                    NIB <span className="text-xs text-gray-400">*</span>{' '}
                  </label>
                  <div className="flex flex-col">
                    <input
                      value={nib}
                      className={`base`}
                      onChange={(e) => setNib(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-area w-1/2 sm:w-full">
                  <label>
                    File NIB <span className="text-xs text-gray-400">*</span>{' '}
                  </label>
                  <div className="flex flex-col">
                    <input
                      ref={fileNibRef}
                      type="file"
                      className="base"
                      accept=".jpg,.jpeg,.pdf"
                      onChange={(e) => setFileNib(e.target.files?.[0] || null)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:flex-col">
                <div className="input-area w-1/2 sm:w-full">
                  <label>
                    NPWP <span className="text-xs text-gray-400">*</span>{' '}
                  </label>
                  <div className="flex flex-col">
                    <input
                      value={npwp}
                      className={`base`}
                      onChange={(e) => setNpwp(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-area w-1/2 sm:w-full">
                  <label>
                    File NPWP <span className="text-xs text-gray-400">*</span>{' '}
                  </label>
                  <div className="flex flex-col">
                    <input
                      ref={fileNpwpRef}
                      type="file"
                      className="base"
                      accept=".jpg,.jpeg,.pdf"
                      onChange={(e) => setFileNpwp(e.target.files?.[0] || null)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:flex-col">
                <div className="input-area w-1/2 sm:w-full">
                  <label>
                    File Contact Person{' '}
                    <span className="text-xs text-gray-400">*</span>{' '}
                  </label>
                  <div className="flex flex-col">
                    <input
                      ref={fileContactPersonRef}
                      type="file"
                      className="base"
                      accept=".jpg,.jpeg,.pdf"
                      onChange={(e) =>
                        setFileContactPerson(e.target.files?.[0] || null)
                      }
                    />
                  </div>
                </div>
                <div className="input-area w-1/2 sm:w-full">
                  <label>
                    Foto KTP <span className="text-xs text-gray-400">*</span>{' '}
                  </label>
                  <div className="flex flex-col">
                    <input
                      ref={photoKtpRef}
                      type="file"
                      className="base"
                      accept=".jpg,.jpeg,.pdf"
                      onChange={(e) => setPhotoKtp(e.target.files?.[0] || null)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-button">
            {/* <button className="btn btn-primary" onClick={() => onCancel()}>
              Batal
            </button> */}
            <button className="btn btn-primary" onClick={() => onSave()}>
              Ajukan Data
            </button>
          </div>
        </div>
      </div>
      <ModalLoading
        isModalOpen={loading}
        textInfo="Harap tunggu, pengajuan anda sedang disimpan"
      />
    </main>
  );
};

export default RegisterTokoForm;

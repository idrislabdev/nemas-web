/* eslint-disable @typescript-eslint/no-explicit-any */

import { Modal } from 'antd';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ArrowLeft } from '@untitled-ui/icons-react';
import axiosInstance from '@/@core/utils/axios';
import { setCookie } from 'cookies-next';

const ModalLoginOTP = (props: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  partialCode: string;
}) => {
  const { isModalOpen, setIsModalOpen, partialCode } = props;
  const textBase = useRef(null);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const onVerify = async () => {
    const inputs = document.querySelectorAll<HTMLInputElement>('.input-otp');
    const temp: string[] = [];
    inputs.forEach((input) => {
      const value = input.value;
      temp.push(value);
    });
    try {
      const body = {
        partial_token: partialCode,
        otp: temp.join(''),
      };
      axiosInstance
        .post('authentication/api/verify-2fa/', body)
        .then((response) => {
          const data = response.data;
          if (data) {
            setCookie('token', data.access);
            localStorage.setItem('token', data.access);
            axiosInstance.get(`/users/me/`).then((response) => {
              const datUser = response.data;
              axiosInstance.get(`/users/user/prop/`).then((response) => {
                const dataProp = response.data;
                localStorage.setItem('user', JSON.stringify(datUser));
                localStorage.setItem('user_prop', JSON.stringify(dataProp));
                setCookie('user', JSON.stringify(datUser));
                setCookie('user_prop', JSON.stringify(dataProp));
                window.location.href = '/';
              });
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('.input-otp');
    const values = Array(6);
    let clipData: any;

    inputs.forEach((tag: any, index) => {
      tag.addEventListener('keyup', (event: any) => {
        if (event.code === 'Backspace' && hasNoValue(index)) {
          if (index > 0) (inputs[index - 1] as HTMLInputElement).focus();
        }

        //else if any input move focus to next or out
        else if (tag.value !== '') {
          if (index < inputs.length - 1) {
            (inputs[index + 1] as HTMLInputElement).focus();
          } else {
            tag.blur();
          }
        }

        //add val to array to track prev vals
        values[index] = event.target?.value;
      });

      tag.addEventListener('input', () => {
        //replace digit if already exists
        if (tag.value > 10) {
          tag.value = tag.value % 10;
        }
      });

      tag.addEventListener('paste', (event: any) => {
        event.preventDefault();
        clipData = event.clipboardData.getData('text/plain').split('');
        filldata(index);
      });
    });

    function filldata(index: number) {
      for (let i = index; i < inputs.length; i++) {
        (inputs[i] as HTMLInputElement).value = clipData.shift();
      }
    }

    function hasNoValue(index: number) {
      if (values[index] || values[index] === 0) return false;

      return true;
    }
  });

  return (
    <Modal
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
      closeIcon={false}
      centered
      keyboard={false}
      width={644}
      maskClosable={false}
    >
      <div className={`content-body flex flex-col items-center relative`}>
        <div className="flex flex-col justify-center items-center gap-[24px] z-[2]">
          <div className="flex flex-col justify-center items-center gap-[12px]">
            <h2 className="text-[30px]/[38px] text-gray-900 font-semibold">
              Masukkan kode
            </h2>
            <div className="flex flex-col justify-center items-center text-center">
              <p>
                Masukkan kode OTP yang yang telah dikirim ke nomor whatsapp anda
              </p>
            </div>
          </div>
          <div className="flex items-center" ref={textBase}>
            <div className="flex items-center gap-[12px]">
              <input
                value={otp[0]}
                onChange={(e) =>
                  setOtp((prevArr) => {
                    const result = [...prevArr];
                    result[0] = e.target.value.replace(/\D/g, '');
                    return result;
                  })
                }
                placeholder="0"
                className={`input-otp h-[80px] w-[80px] sm:w-[40px] sm:h-[40px] sm:!text-lg focus:border-double focus:border-8 focus:border-primary border border-gray-300 rounded-[12px] !text-[48px]/[60px] text-primary font-medium text-center ${
                  otp[0] != '' ? '!border-primary border-[2px]' : ''
                }`}
              />
              <input
                value={otp[1]}
                onChange={(e) =>
                  setOtp((prevArr) => {
                    const result = [...prevArr];
                    result[1] = e.target.value.replace(/\D/g, '');
                    return result;
                  })
                }
                placeholder="0"
                className={`input-otp h-[80px] w-[80px] sm:w-[40px] sm:h-[40px] sm:!text-lg focus:border-double focus:border-8 focus:border-primary border border-gray-300 rounded-[12px] !text-[48px]/[60px] text-primary font-medium text-center ${
                  otp[1] != '' ? '!border-primary border-[2px]' : ''
                }`}
              />
              <input
                value={otp[2]}
                onChange={(e) =>
                  setOtp((prevArr) => {
                    const result = [...prevArr];
                    result[2] = e.target.value.replace(/\D/g, '');
                    return result;
                  })
                }
                placeholder="0"
                className={`input-otp h-[80px] w-[80px] sm:w-[40px] sm:h-[40px] sm:!text-lg focus:border-double focus:border-8 focus:border-primary border border-gray-300 rounded-[12px] !text-[48px]/[60px] text-primary font-medium text-center ${
                  otp[2] != '' ? '!border-primary border-[2px]' : ''
                }`}
              />
              <input
                value={otp[3]}
                onChange={(e) =>
                  setOtp((prevArr) => {
                    const result = [...prevArr];
                    result[3] = e.target.value.replace(/\D/g, '');
                    return result;
                  })
                }
                placeholder="0"
                className={`input-otp h-[80px] w-[80px] sm:w-[40px] sm:h-[40px] sm:!text-lg focus:border-double focus:border-8 focus:border-primary border border-gray-300 rounded-[12px] !text-[48px]/[60px] text-primary font-medium text-center ${
                  otp[3] != '' ? '!border-primary border-[2px]' : ''
                }`}
              />
              <input
                value={otp[4]}
                onChange={(e) =>
                  setOtp((prevArr) => {
                    const result = [...prevArr];
                    result[4] = e.target.value.replace(/\D/g, '');
                    return result;
                  })
                }
                placeholder="0"
                className={`input-otp h-[80px] w-[80px] sm:w-[40px] sm:h-[40px] sm:!text-lg focus:border-double focus:border-8 focus:border-primary border border-gray-300 rounded-[12px] !text-[48px]/[60px] text-primary font-medium text-center ${
                  otp[4] != '' ? '!border-primary border-[2px]' : ''
                }`}
              />
              <input
                value={otp[5]}
                onChange={(e) =>
                  setOtp((prevArr) => {
                    const result = [...prevArr];
                    result[5] = e.target.value.replace(/\D/g, '');
                    return result;
                  })
                }
                placeholder="0"
                className={`input-otp h-[80px] w-[80px] sm:w-[40px] sm:h-[40px] sm:!text-lg focus:border-double focus:border-8 focus:border-primary border border-gray-300 rounded-[12px] !text-[48px]/[60px] text-primary font-medium text-center ${
                  otp[5] != '' ? '!border-primary border-[2px]' : ''
                }`}
              />
            </div>
          </div>
          <button
            className="bg-primary text-white w-full rounded-sm h-[30px]"
            onClick={() => onVerify()}
          >
            Verifikasi Nomor
          </button>
          <button
            className="text-gray-700 text-sm font-semibold flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            <span className="my-icon icon-sm">
              <ArrowLeft />{' '}
            </span>
            Kembali
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalLoginOTP;

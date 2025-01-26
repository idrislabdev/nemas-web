import Image from 'next/image'
import React from 'react'

const RegisterPageWrapper = () => {
  return (
    <main className='register-page sm:mobile-responsive'>
      <div className='main-section'>
        <div className='main-container'>
            <div className='form-area'>
                <div className='form'>
                    <div className='main-form'>
                        <div className='form-group'>
                            <label>Nama Akun</label>
                            <input placeholder='Masukkan Nama Akun'/>
                        </div>
                        <div className='form-group'>
                            <label>No Handphone</label>
                            <input placeholder='Masukkan No Handphone'/>
                        </div>
                        <div className='form-group'>
                            <label>Email</label>
                            <input placeholder='Masukkan Email'/>
                        </div>
                        <div className='form-group'>
                            <label>Tujuan Investasi</label>
                            <select>
                                <option value='test'>Test</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label>Sumber Dana</label>
                            <select>
                                <option value='test'>Test</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className='form-area'>
                <div className='form'>
                    <div className='main-form'>
                        <div className='form-group'>
                            <label>Kode Referal (Opsional)</label>
                            <input placeholder='Masukkan Kode Referal'/>
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input placeholder='Masukkan Password'/>
                        </div>
                        <div className='form-group'>
                            <label className='!text-[#676E71] !text-[12px]/[22px]'>Password harus mengandung setidaknya:</label>
                            <div className='flex flex-col gap-[8px] text-[#676E71] text-[12px]/[22px] font-medium'>
                                <p>*) 8-16 Karakter</p>
                                <p>*) 1 Angka (0-9)</p>
                                <p>*) 1 Huruf besar (A-Z)</p>
                                <p>*) 1 Karakter spesial (Contoh: !, @, #, dsb)</p>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>Ulangi Password</label>
                            <input placeholder='Ulangi Masukkan Password'/>
                        </div>
                        <p className='text-[14px]/[22px] text-[#1F211E]'>
                            Dengan mendaftar, saya setuju dengan 
                            <span className='text-[#39BFB6]'>Syarat dan Ketentuan</span>, serta 
                            <span className='text-[#39BFB6]'>Kebijakan Privasi</span> 
                            yang telah ditetapkan oleh Nemas
                        </p>
                    </div>
                    <button>Daftar Sekarang</button>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default RegisterPageWrapper
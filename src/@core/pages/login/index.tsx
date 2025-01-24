import Image from 'next/image'
import React from 'react'

const LoginPageWrapper = () => {
  return (
    <main className='login-page sm:mobile-responsive'>
      <div className='main-section'>
        <div className='main-container'>
          <div className='form-area'>
            <div className='form'>
              <h2>Login</h2>
              <div className='main-form'>
                <div className='form-group'>
                  <label>Email/No Handphone</label>
                  <input placeholder='Masukkan Email/No Handphone'/>
                </div>
                <div className='form-group'>
                  <label>Password</label>
                  <input type='password' placeholder='Masukkan Password'/>
                </div>
              </div>
            </div>
            <div className='button-group'>
              <button>Login</button>
              <a>Lupa Password</a>
            </div>
          </div>
          <div className="vertical-divider">
            <div className="center-element">Atau</div>
          </div>
          <div className="horizontal-divider line one-line"><span className='text-[#17494E] text-[16px]/[26px]'>Atau</span></div>
          <div className='info-area'>
            <div className='title-info'>
              <h2>Belum Memiliki Akun?</h2>
              <Image src={`/images/piggy-bank.png`} alt='piggy-bank' width={0} height={0} sizes='100%' />
            </div>
            <div className='footer-info'>
              <h5>Ayo berinvestasi emas bersama <span>Nemas</span></h5>
              <button>Daftar</button>
            </div>
          </div>
        </div>
        <a>Kembali ke Halaman Utama</a>
      </div>
    </main>
  )
}

export default LoginPageWrapper
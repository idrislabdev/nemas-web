import { Input } from 'antd'
import React from 'react'

const UserKeamananSandiPage = () => {
  return (
    <div className='keamanan-sub-container'>
        <h5>Keamanan Akun</h5>
        <div className='form-group'>
            <h6>Ubah Kata Sandi</h6>
            <div className='group-input'>
                <label>Password Saat Ini</label>
                <Input type='password' size='large' placeholder='Masukkan Password'/>
            </div>
            <div className='group-input'>
                <label>Password Baru</label>
                <Input type='password' size='large' placeholder='Masukkan Password Baru' />
                <div className='note'>
                    <p>Password harus mengandung setidaknya:</p>
                    <span>*) 8-16 Karakter</span>
                    <span>*) 1 Angka (0-9)</span>
                    <span>*) 1 Huruf besar (A-Z)</span>
                    <span>*) 1 Karakter spesial (Contoh: !, @, #, dsb)</span>
                </div>
            </div>
            <div className='group-input'>
                <label>Password Saat Ini</label>
                <Input type='password' size='large' placeholder='Ulangi Masukkan Password' />
            </div>
        </div>
        <button>Ubah Kata Sandi</button>
    </div>
  )
}

export default UserKeamananSandiPage
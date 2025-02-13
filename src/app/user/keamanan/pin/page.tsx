import { Input } from 'antd'
import React from 'react'

const UserKeamananPinPage = () => {
  return (
    <div className='keamanan-sub-container'>
        <h5>Keamanan Akun</h5>
        <div className='form-group'>
            <h6>Ubah PIN</h6>
            <div className='group-input'>
                <label>PIN Lama</label>
                <Input type='password' size='large' placeholder='Masukkan PIN Lama' />
            </div>
            <div className='group-input'>
                <label>PIN Baru</label>
                <Input type='password' size='large' placeholder='Masukkan PIN Baru' />
            </div>
            <div className='group-input'>
                <label>Ulangi PIN Baru</label>
                <Input type='password' size='large' placeholder='Ulangi Masukkan PIN Baru' />
            </div>
        </div>
        <button>Ubah PIN</button>
    </div>
  )
}

export default UserKeamananPinPage
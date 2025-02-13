import { Input } from 'antd'
import React from 'react'

const UserKeamananPertanyaanPage = () => {
  return (
    <div className='keamanan-sub-container'>
        <h5>Keamanan Akun</h5>
        <div className='form-group'>
            <h6>Ubah PIN</h6>
            <div className='group-input'>
                <label>Pilih Pertanyaan Keamanan</label>
                <select>
                    <option value='test'>Siapa nama hewan peliharaan anda?</option>
                </select>
            </div>
            <div className='group-input'>
                <label>Jawaban</label>
                <Input size='large' placeholder='Masukkan Jawaban' />
            </div>
        </div>
        <button>Simpan Jawaban</button>
    </div>
  )
}

export default UserKeamananPertanyaanPage
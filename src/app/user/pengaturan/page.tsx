import { Camera01, Plus, Trash01 } from '@untitled-ui/icons-react'
import { Input } from 'antd'
import React from 'react'

const UserPengaturanPage = () => {
  return (
    <div className='pengaturan-sub-container'>
        <h5>Pengaturan Akun</h5>
        <div className='profil-area'>
            <div className='sub-area'>
                <h6>Data Pribadi</h6>
                <div className='group-input'>
                    <label>Nama Akun</label>
                    <Input size='large' />
                </div>
                <div className='group-input'>
                    <label>No Handphone</label>
                    <Input size='large' />
                </div>
                <div className='group-input'>
                    <label>Email</label>
                    <Input size='large' />
                </div>
            </div>
            <div className='sub-area'>
                <h6>Data Pribadi</h6>
                <div className='group-input'>
                    <label>KTP</label>
                    <Input size='large' />
                    <span>KTP anda telah terverifikasi</span>
                </div>
                <div className='group-button'>
                    <label>Swafoto KTP <span>(Opsional)</span></label>
                    <button><Camera01 /> Unggah Swafoto KTP</button>
                </div>
                <div className='group-button'>
                    <label>NPWP <span>(Opsional)</span></label>
                    <button><Camera01 /> Unggah NPWP</button>
                </div>
            </div>
        </div>
        <div className='rekening-area'>
            <h6>Data Rekening</h6>
            <div className='group-button'>
                <label>Akun Bank / E-Money</label>
                <div className='empty-state'>
                    <label>Belum Ada Akun Bank</label>
                    <a><Plus /> Tambahkan Akun Bank</a>
                </div>
            </div>
        </div>
        <button className='btn-hapus'>
            <Trash01 /> Hapus Akun
        </button>
    </div>
  )
}

export default UserPengaturanPage
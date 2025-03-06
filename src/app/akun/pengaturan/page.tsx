import { Trash01 } from '@untitled-ui/icons-react'
import { Input } from 'antd'
import Image from 'next/image'
import React from 'react'

const UserPengaturanPage = () => {
  return (
    <div className='pengaturan-sub-container'>
        <h5>Pengaturan Akun</h5>
        <div className='profil-area'>
            <div className='sub-area'>
                <div className='form-area'>
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
            </div>
            <div className='playstore-area'>
                <div className='playstore'>
                    <div className='playstore-content'>
                        <div className='image-area'>
                            <div className='image-circle'></div>
                            <Image src={`/images/smartphone-mockup.png`} alt='smartphone mockup' width={0} height={0} sizes='100%' />
                        </div>
                        <p>
                            Lakukan Pendaftaran & Verifikasi Dokumen seperti KTP & Nomor Rekening di <span>Aplikasi Nemas</span>
                        </p>
                    </div>
                    <div className='playstore-footer'>
                        <a><Image src={`/images/playstore.png`} className="w-full h-full" width={0} height={0} sizes='100%' alt='plastore' /></a>
                        <a><Image src={`/images/appstore.png`} className="w-full h-full" width={0} height={0} sizes='100%' alt='appstore' /></a>
                    </div>
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
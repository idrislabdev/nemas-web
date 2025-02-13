import { Switch } from 'antd'
import React from 'react'

const UserSettingNotifPage = () => {
  return (
    <div className='setting-notif-sub-container'>
        <h5>Setting Notifikasi Harga</h5>
        <div className='setting-notif'>
            <div className='text-notif'>
                <label>Notifikasi Emas</label>
                <p>Pemberitahuan harga jual dan beli emas yang di set akan ditampilkan sekali sehari</p>
            </div>
            <Switch defaultChecked />
        </div>
        <div className='setting-harga'>
            <label>Set Harga Emas</label>
            <div className='empty-state'>
                <label>Anda belum mengatur notifikasi harga</label>
                <a>Atur Notifikasi</a>
            </div>
        </div>
    </div>
  )
}

export default UserSettingNotifPage
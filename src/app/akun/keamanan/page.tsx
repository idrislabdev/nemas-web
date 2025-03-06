import { PinIcon } from '@/@core/components/custom-icons'
import { ChevronRight, Key01, Lock01 } from '@untitled-ui/icons-react'
import Link from 'next/link'
import React from 'react'

const UserKeamananPage = () => {
  return (
    <div className='keamanan-sub-container'>
        <h5>Keamanan Akun</h5>
        <div className='submenu'>
            <Link href={`/akun/keamanan/sandi`}>
                <span><Key01 />Ubah Kata Sandi</span>
                <span className='my-icon'><ChevronRight /></span>
            </Link>
            <Link href={`/akun/keamanan/pin`}>
                <span><PinIcon />Ubah PIN</span>
                <span className='my-icon'><ChevronRight /></span>
            </Link>
            <Link href={`/akun/keamanan/pertanyaan`}>
                <span><Lock01 />Ubah Pertanyaan Keamanan</span>
                <span className='my-icon'><ChevronRight /></span>
            </Link>
        </div>
    </div>
  )
}

export default UserKeamananPage
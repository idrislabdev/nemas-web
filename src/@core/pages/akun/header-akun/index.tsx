"use client";

import React from 'react'
import ProfileAkunContainer from './profile-container';

const HeaderAkun = () => {
    return (
        <div className='header-section'>
            <h2>Akun Saya</h2>
            <div className='profile-asset-container'>
                <ProfileAkunContainer />
            </div>
        </div>
    )
}

export default HeaderAkun
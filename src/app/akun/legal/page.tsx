"use client";

import { File06 } from '@untitled-ui/icons-react';
import React from 'react'

const UserLegalPage = () => {
    return (
        <div className='bantuan-legal-sub-container'>
            <div className='header-area'>
                <h5>Legal</h5>
            </div>
            <div className="syarat-kebijakan">
                <a href='/syarat-ketentuan' target='_blank'><File06 />Syarat dan Ketentuan</a>
                <a href='/kebijakan-privasi' target='_blank'><File06 />Kebijakan Privasi</a>
            </div>
        </div>
    )
}

export default UserLegalPage
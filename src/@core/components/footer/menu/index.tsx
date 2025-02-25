"use client";

import React, { useState } from 'react'
import ModalPlaystore from '../../modals/modal-playstore'

const FooterMenu = () => {
    const [ismodalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className='product-area'>
                <div className='sub-product'>
                    <a onClick={() => setIsModalOpen(true)}>Tabungan Emas</a>
                    <a onClick={() => setIsModalOpen(true)}>Jual Emas</a>
                    <a onClick={() => setIsModalOpen(true)}>Beli Emas</a>
                    <a onClick={() => setIsModalOpen(true)}>Investasi</a>
                    <a onClick={() => setIsModalOpen(true)}>Emas Fisik</a>
                </div>
                <div className='sub-product'>
                    <a onClick={() => setIsModalOpen(true)}>Tarik Emas</a>
                    <a onClick={() => setIsModalOpen(true)}>Jaminan Emas</a>
                    <a onClick={() => setIsModalOpen(true)}>Kirim Emas</a>
                    <a onClick={() => setIsModalOpen(true)}>Tarik Saldo</a>
                    <a onClick={() => setIsModalOpen(true)}>Emas Fisik</a>
                </div>
            </div>
            <ModalPlaystore 
                isModalOpen={ismodalOpen} 
                setIsModalOpen={setIsModalOpen} 
            />
        </>
    )
    
}

export default FooterMenu
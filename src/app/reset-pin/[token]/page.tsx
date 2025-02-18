"use client"
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const ResetPinToken = () => {
    const params = useParams<{ token: string }>();
    const [pin, setPin] = useState<string>("");
    const [confirmPin, setConfirmPin] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleResetPin = () => {
        if(pin !== confirmPin) {
            alert("pin dan konfirmasi pin harus sama")
        } else {
            setLoading(true);
            axios.post(`https://www.nemas.id/api/users/token/reset-token/${params.token}/`, {
                new_data: pin,
                new_data_type: 'PIN'
            }).then(response => {
                console.log(response);
                setLoading(false);
                const message: string = response.data.message;
                alert(message);
            }).catch(err => {
                console.log(err);
                setLoading(false);
                const message: string = err.response.data.detail;
                alert(message);
            });
        }
    }
    
    return (
        <div>
            {/* {params.token} */}
            <div className='flex flex-col p-5 justify-center'>
                <h1 className='text-2xl text-center'>Terima kasih telah melakukan reset pin, silahkan masukkan pin baru anda</h1>
                <input
                    type="password"
                    placeholder='Masukkan Password Baru'
                    className='border border-solid border-black mt-2 p-2 rounded'
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Masukkan Konfirmasi Password Baru'
                    className='border border-solid border-black mt-2 p-2 rounded'
                    value={confirmPin}
                    onChange={(e) => setConfirmPin(e.target.value)}
                />
                <button
                    className={`border border-solid border-black ${pin === "" || confirmPin === "" ? 'bg-gray-200' : 'bg-green-600'} text-white p-2 mt-2 rounded`}
                    disabled={pin === "" || confirmPin === "" || loading === true}
                    onClick={handleResetPin}
                >
                    {
                        loading ? "Loading..." : "Ubah Pin"
                    }
                </button>
            </div>
        </div>
    )
}

export default ResetPinToken
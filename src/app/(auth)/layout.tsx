"use client";

import { IUserLogin } from '@/@core/@types/interface';
import React, { useEffect, useState } from 'react'

const AuthLayout = ({ children }: {children : React.ReactNode}) => {
    const [userLogin, setUserLogin] = useState({} as IUserLogin)
    
    useEffect(() => {
       const userProp:IUserLogin = JSON.parse(localStorage.getItem("user_prop") || "{}")
        setUserLogin(userProp)
    },[])

    return (
        <>
            { userLogin.name && children }
            { !userLogin.name &&
                <div className='flex flex-col justify-center items-center h-screen'>
                    <h5>Not Found</h5>
                </div>
            }
        </>

    )
}

export default AuthLayout

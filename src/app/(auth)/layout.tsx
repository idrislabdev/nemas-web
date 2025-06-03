// "use client";

import { IUserLogin } from '@/@core/@types/interface';
import { cookies } from 'next/headers';
import React from 'react'

const AuthLayout = ({ children }: {children : React.ReactNode}) => {
    const cookieStore = cookies();

  const userLogin:IUserLogin = cookieStore.get("user") ? JSON.parse(cookieStore.get("user")?.value || "{}") : {}; //JSON.parse(getCookie('user') || "{}")

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

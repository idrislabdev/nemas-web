/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IUserLogin, IUserProp } from '@/@core/@types/interface'
import { useGlobals } from '@/@core/hoc/useGlobals'
import {  ChevronDown, LogIn01, ShoppingCart01 } from '@untitled-ui/icons-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { UserLoginIcon } from '../../custom-icons'
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image';

const LoginArea = () => {
  const { globals, saveGlobals } = useGlobals()
  const [stateDone, setStateDone] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const dropdownuser = useRef<HTMLDivElement>(null);

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  }

    
  useEffect(() => {
      if (!stateDone) {
          const user:IUserLogin = JSON.parse(localStorage.getItem("user") || "{}")
          const userProp:IUserProp = JSON.parse(localStorage.getItem("user_prop") || "{}")
          const cartCount:number = parseInt(localStorage.getItem("cart_count") || "0") 
          saveGlobals({...globals, userLogin:user, userProp:userProp, cartCount: cartCount})
          setStateDone(true)
      }
  },[globals, saveGlobals, stateDone, setStateDone])

  useEffect(() => {
    function assertIsNode(e: EventTarget | null): asserts e is Node {
      if (!e || !("nodeType" in e)) {
          throw new Error(`Node expected`);
      }
    }
  
    function handleClick(event : any) {
      assertIsNode(event.target);
      if (dropdownuser.current && !dropdownuser.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [showMenu]);

  useEffect(() => {
    const token = typeof window !== 'undefined'  ? localStorage.getItem("token") : undefined;
    if (token) {
        axiosInstance.get(`/users/me/`)
        .then((response) => {
            const datUser = response.data
            axiosInstance.get(`/users/user/prop/`)
            .then((response) => {
                const dataProp = response.data
                axiosInstance.get(`order/cart/?offset=0&limit=100`)
                .then((response) => {
                    const { results } = response.data
                    localStorage.setItem("user", JSON.stringify(datUser))
                    localStorage.setItem("user_prop", JSON.stringify(dataProp))
                    localStorage.setItem("cart_count", results.length)
                });

            });
        })
        .catch(() => {
          localStorage.clear();
          saveGlobals({...globals, userLogin:{} as IUserLogin})
        });
    }
  })

  return (
    <div className={`login-area ${globals.userLogin.name ? 'items-center' : ''}`} ref={dropdownuser}>
        {globals.cartCount > 0 &&
          <Link href={`/keranjang`} className='cart-notif'><span><ShoppingCart01 /></span> 
          <span className='badge-notif'>{globals.cartCount}</span>
          </Link>
        }
        {!globals.userLogin.name &&
          <div className='login-non-member'>
            <Link href={`/login`} className='login-button'>
              <span className='my-icon icon-sm'><LogIn01 /></span>
              Log In
            </Link>
            <Link href={`/register`} className='register-button'>Daftar</Link>
          </div>
        }
        {globals.userLogin.name &&
          <div className='login-member' onClick={() => setShowMenu(!showMenu)}>
            <Image 
                src={`/images/default-avatar.jpg`} 
                alt='logo nemas' 
                width={0} 
                height={0} 
                sizes='100%' 
            />
            <div className='member-info'>
              <p>{globals.userLogin.name}</p>
              <span>Novice Saver</span>
            </div>
            <span className={`chevron-icon transition-all duration-300 ${showMenu ? 'rotate-180': ''}`}><ChevronDown /></span>
            <div className={`user-dropdown ${showMenu ? 'show' : ''}`}>
              <ul>
                <li><Link href={`/akun`}><UserLoginIcon />Akun Saya</Link></li>
                <li><Link href={`/keranjang`}><ShoppingCart01 />Keranjang</Link></li>
              </ul>
              <button onClick={() => logOut()}>Log Out</button>
            </div>
          </div>
        }
    </div>
  )
}

export default LoginArea
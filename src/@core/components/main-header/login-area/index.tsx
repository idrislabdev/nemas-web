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
import { deleteCookie } from 'cookies-next';

const LoginArea = (props: {userLogin:IUserLogin, userProps:IUserProp, token:string}) => {
  const { userLogin, userProps, token } = props
  const { globals, saveGlobals } = useGlobals()
  const [showMenu, setShowMenu] = useState(false)
  const dropdownuser = useRef<HTMLDivElement>(null);

  const logOut = () => {
    deleteCookie('user');
    deleteCookie('user_prop');
    deleteCookie('token');
    localStorage.clear();
    window.location.href = '/';
  }

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
    if (token != "") {
        axiosInstance.get(`orders/fix/cart/detail/?order_type=buy&offset=0&limit=100`)
        .then((response) => {
            const { results } = response.data        
            saveGlobals({...globals, cartCount: results.length, userProp: userProps, userLogin: userLogin})
        });
    }
  }, [])

  return (
    <div className={`login-area ${userLogin.name ? 'items-center' : ''}`} ref={dropdownuser}>
        {userLogin.name &&
          <Link href={`/keranjang`} className='cart-notif'><span><ShoppingCart01 /></span> 
           {globals.cartCount > 0 &&
            <span className='badge-notif'>{globals.cartCount}</span>
           }
          </Link>
        }
        {!userLogin.name &&
          <div className='login-non-member'>
            <Link href={`/login`} className='login-button'>
              <span className='my-icon icon-sm'><LogIn01 /></span>
              Log In
            </Link>
            <Link href={`/register`} className='register-button'>Daftar</Link>
          </div>
        }
        {userLogin && userLogin.name &&
          <div className='login-member' onClick={() => setShowMenu(!showMenu)}>
            <Image 
                src={`/images/default-avatar.jpg`} 
                alt='logo nemas' 
                width={0} 
                height={0} 
                sizes='100%' 
            />
            <div className='member-info'>
              <p>{userLogin.name}</p>
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
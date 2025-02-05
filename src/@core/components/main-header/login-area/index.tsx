/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IUserLogin } from '@/@core/@types/interface'
import { useGlobals } from '@/@core/hoc/useGlobals'
import { ChevronDown, Mail01 } from '@untitled-ui/icons-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { UserLoginIcon } from '../../custom-icons'

const LoginArea = () => {
  const { globals, saveGlobals } = useGlobals()
  const [stateDone, setStateDone] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const dropdownuser = useRef<HTMLDivElement>(null);

  useEffect(() => {
      if (!stateDone) {
          const user:IUserLogin = JSON.parse(localStorage.getItem("user") || "{}")
          saveGlobals({...globals, userLogin:user})
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

  return (
    <div className={`login-area ${globals.userLogin.name ? 'items-center' : ''}`} ref={dropdownuser}>
        <label><span><Mail01 /></span></label>
        {!globals.userLogin.name &&
          <div className='login-non-member'>
            <Link href={`/login`} className='login-button'>Log In</Link>
            <Link href={`/register`} className='register-button'>atau <span>Daftar</span> disini</Link>
          </div>
        }
        {globals.userLogin.name &&
          <div className='login-member' onClick={() => setShowMenu(!showMenu)}>
            <div className='login-icon'>
              <span className='user-icon'><UserLoginIcon /></span>
              <span className={`chevron-icon transition-all duration-300 ${showMenu ? 'rotate-180': ''}`}><ChevronDown /></span>
            </div>
            <div className='login-text'>
              <p>Hi, {globals.userLogin.name}</p>
              <span>Gold Member</span>
            </div>
            <div className={`user-dropdown ${showMenu ? 'show' : ''}`}>
              <ul>
                <li><a><UserLoginIcon />Akun Saya</a></li>
                <li><a><UserLoginIcon />Transakasi</a></li>
                <li><a><UserLoginIcon />Notifikasi</a></li>
              </ul>
              <button>Log Out</button>
            </div>
          </div>
        }
    </div>
  )
}

export default LoginArea
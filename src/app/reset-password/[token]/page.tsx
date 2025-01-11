"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const ResetPasswordToken = () => {
    const params = useParams<{ token: string }>()
    return (
        <div>{params.token}</div>
    )
}

export default ResetPasswordToken
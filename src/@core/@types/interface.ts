/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IDestination {
    name: string, 
    holder: string, 
    number: string
}

export interface IVoucher {
    code : string,
    name: string,
}

export interface IUserLogin {
    email:string,
    id:string,
    name:string,
    phone_number:string,
    user_name:string
}
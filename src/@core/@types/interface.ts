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

export interface IPayment {
    id: string,
    type: string,
    name: string
}

export interface IUserLogin {
    email:string,
    id:string,
    name:string,
    phone_number:string,
    user_name:string
}

export interface IFaq {
    information_educational_id: number,
    information_name?: string,
    information_notes?: string,
    information_url?: string,
    information_background?: string
}

export interface IArticle {
    information_article_id: number,
    information_article_name: string,
    information_article_body: string,
    article_date: string,
    article_publish_date: string,
    article_updated_date: string,
    article_author: string,
    article_background: string,
    article_source: string,
    article_link: string
}

export interface IRating {
    information_rate_id: number,
    information_rate_name: string,
    rate: number,
    message: string,
    publish: boolean
}

export interface IUserCreate {
    email?: string,
    name?: string,
    password?: string,
    phone_number?:string,
    user_name?:string
}

export interface IGoldPrice {
    gold_price_id?: number,
    gold_price_source?: string,
    gold_price_weight?: number,
    gold_price_base?: number,
    gold_price_sell?: number,
    gold_price_buy?: number
}

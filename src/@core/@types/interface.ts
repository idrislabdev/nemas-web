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

export interface IUserProp {
    user_id: string,
    name: string,
    wallet_amt: string,
    gold_wgt: string,
    invest_gold_wgt: string,
    loan_wgt: string,
    loan_amt: string,
    photo: string,
    bank_account_code: string,
    bank_account_number: number,
    bank_account_holder_name: string,
    level: string,
    level_id: string,
    address: string,
    address_post_code: string,
    create_time: string,
    create_user: string
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

export interface IGold {
    gold_id?: number,
    gold_weight?: number,
    type?: string,
    brand?: string,
    certificate_number?: string,
    create_user?: string,
    upd_user?: string,
    upd_time?: string,
    gold_image_1: string,
    gold_image_2?: string,
    gold_image_3?: string,
    gold_image_4?: string,
    gold_image_5?: string
}

export interface IPromo {
    promo_id?: number,
    promo_code?: string,
    leveling_user?: string,
    promo_name?: string,
    promo_url?: string,
    promo_start_date?: Date,
    promo_end_date?: Date,
    promo_tag?: string,
    promo_url_background?: string,
    promo_diskon?: number,
    promo_cashback?: number,
    promo_cashback_tipe_user?: string,
    merchant_cashback?: string,
    createtime?: Date,
    createuser?: string,
    updtime?: Date,
    upduser?: string
}
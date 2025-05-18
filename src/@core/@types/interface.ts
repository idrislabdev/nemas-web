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
    type?: string,
    type_name?: string,
    name?: string,
    method_id: string,
    method_name: string,
    va_bank: string,
    url: string
}

export interface IPaymentBank {
    bank_code : string, 
    bank_name : string,
    url: string
}

export interface IPaymentMethod {
    payment_method_id: string,
    payment_method_name: string,
    payment_method_description: string,
    banks:IPaymentBank[],
    active: boolean
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

export interface IGoldPromo {
    gold_promo_id?: number,
    gold_promo_code?: string,
    gold_promo_description?: string,
    gold_promo_weight?: string,
    gold_promo_amt_pct?: string,
    gold_promo_amt?: string,
    gold_promo_min_weight?: string,
    gold_promo_max_weight?: string,
    gold_promo_min_amt?: string,
    gold_promo_max_amt?: string,
    gold_promo_start_date?: string,
    gold_promo_end_date?: string,
    gold_promo_active?: boolean,
    create_user?: string,
    upd_user?: string
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
    gold_price_buy?: number,
    gold_price_buy_round?: number,
}

export interface IGold {
    gold_id?: number,
    gold_weight: number,
    type?: string,
    brand?: string,
    certificate_number?: string,
    price:number,
    create_user?: string,
    upd_user?: string,
    upd_time?: string,
    gold_price_summary:number,
    gold_price_summary_roundup:number,
    gold_image_1: string,
    gold_image_2?: string,
    gold_image_3?: string,
    gold_image_4?: string,
    gold_image_5?: string,
    stock: number
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
    hexcode?: string,
}

export interface ICart {
    order_cart_detail_id: string,
    gold_id: number,
    weight: string,
    price: string,
    quantity: 1,
    total_price: string,
    total_price_round: string,
    created_at: string,
    updated_at: string
}

export interface IShippingService {
    minimum_kilo: number,
    insurance_cost: number,
    insurance_cost_round:number,
    insurance_admin_cost: number,
    volumetric_kg: number,
    packing_cost: number,
    weight: number,
    final_weight: number,
    kilo_divider: number,
    cost: number,
    discount: string,
    total_cost: number,
    total_cost_round: number,
    service_type_code: string,
    service_type_name: string,
    surcharge: number,
    sla: string,
    active: boolean
}

export interface IDeliveryService {
    delivery_partner_service_id: number,
    delivery_partner_service_name: string,
    delivery_partner: number,
    delivery_partner_service_code: string,
    delivery_partner_service_description: number
}


export interface IOrderDetail {
    gold: number,
    gold_type: string,
    gold_brand: string,
    certificate_number: string,
    order_weight: string,
    order_price: string,
    order_qty: number,
    order_cert_price: string,
    order_detail_total_price: string
}

export interface IPayRef {
    order_gold_id: string,
    reference_id: string,
    total_amount: number,
    virtual_account: string
}

export interface IOrder {
    user: string,
    order_user_address: string,
    order_pickup_customer_datetime: string,
    order_cart_id: string,
    order_pickup_address: string,
    order_phone_number: string,
    order_item_weight: string,
    order_amount: string,
    order_payment_va_bank: string,
    order_payment_method: string,
    order_admin_amount: string,
    order_tracking_amount: string,
    order_promo_code: string,
    order_discount: string,
    order_total_price: string,
    order_tracking_insurance: string,
    order_tracking_total:string,
    tracking_courier_service_id: number,
    tracking_courier_service_code: string,
    tracking_courier_id: number
    order_details: IOrderDetail[],
    pay_ref: IPayRef
}
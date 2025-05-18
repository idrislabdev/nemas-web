import axiosInstance from "../utils/axios"

export const getFaqs = async (offset:number, limit:number) => {
    let strLimit = ""
    if (limit) 
        strLimit = `?offset=${offset}&limit=${limit}`
    const resp = await axiosInstance.get(`/core/information/educational/${strLimit}`)
    return resp
}

export const getArticles = async (offset:number, limit:number) => {
    let strLimit = ""
    if (limit) 
        strLimit = `?offset=${offset}&limit=${limit}`
    const resp = await axiosInstance.get(`/core/information/article/${strLimit}`)
    return resp
}

export const getArticleSlug = async (slug:string) => {
    const resp = await axiosInstance.get(`/core/information/article/get/${slug}/`)
    return resp
}


export const getTestimonies = async (offset:number, limit:number) => {
    let strLimit = ""
    if (limit) 
        strLimit = `?offset=${offset}&limit=${limit}`
    const resp = await axiosInstance.get(`/core/information/rating/${strLimit}`)
    return resp
}


export const getBanners = async (offset:number, limit:number) => {
    let strLimit = ""
    if (limit) 
        strLimit = `?offset=${offset}&limit=${limit}`
    const resp = await axiosInstance.get(`/core/information/promo/show/${strLimit}`)
    return resp
}

export const getProducts = async (offset:number, limit:number) => {
    let strLimit = ""
    if (limit) 
        strLimit = `?offset=${offset}&limit=${limit}`
    const resp = await axiosInstance.get(`/core/gold/${strLimit}`)
    return resp
}



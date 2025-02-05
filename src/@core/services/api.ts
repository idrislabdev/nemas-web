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

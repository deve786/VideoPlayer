import { baseUrl } from './baseUrl'
import { commonRequest } from './commonStructure'

export const addVideoApi = async (body) => {
    return await commonRequest('POST', `${baseUrl}/videos`, body)

}

export const getVideoApi = async () => {
    return await commonRequest('GET', `${baseUrl}/videos`, {})
}

export const addCategoryApi = async (body) => {
    return await commonRequest('POST', `${baseUrl}/categories`, body)
}

export const getCategoryApi = async () => {
    return await commonRequest('GET', `${baseUrl}/categories`, {})
}

export const deleteVideoApi = async (id) => {
    return await commonRequest('DELETE', `${baseUrl}/videos/${id}`, {})
}

export const deleteCategoriesApi = async (id) => {
    return await commonRequest('DELETE', `${baseUrl}/categories/${id}`, {})
}

export const addHistoryApi = async (body) => {
    return await commonRequest('POST', `${baseUrl}/history`, body)
}

export const getHistoryApi = async () => {
    return await commonRequest('GET', `${baseUrl}/history`, {})
}

export const deletHistoryApi = async (id) => {
    return await commonRequest('DELETE', `${baseUrl}/history/${id}`, {})
}


export const getSingleVideoApi = async (id) => {
    return await commonRequest('GET', `${baseUrl}/videos/${id}`, {})
}

export const updateCategoriesApi = async (id,body) => {
    return await commonRequest('PUT', `${baseUrl}/categories/${id}`, body)
}
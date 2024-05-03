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
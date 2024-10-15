import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//add video
export const AddvideoApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/videos`, reqBody)
}
//get video
export const getvideoApi = async () => {
    return await commonApi('GET', `${serverUrl}/videos`)
}
//add video histroy
export const AddhistoryApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/history`, reqBody)
}
//get video history
export const getAllVideoHistoryApi = async () => {
    return await commonApi('GET', `${serverUrl}/history`)
}
//delete video
export const deleteVideoApi = async (id) => {
    return await commonApi('DELETE', `${serverUrl}/videos/${id}`)
}
//api to delete videos from watch history
export const deleteHistoryVideoApi = async (id) => {
    return await commonApi('DELETE', `${serverUrl}/history/${id}`)
}
//add category 
export const AddCategoryApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/category`, reqBody)
}
//get category
export const getAllCategoryApi = async () => {
    return await commonApi('GET',`${serverUrl}/category`)
}
//delete category
export const deleteCategoryApi=async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`)
}

export const AddvideoToCategoryApi=async(id,reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${id}`,reqBody)
}




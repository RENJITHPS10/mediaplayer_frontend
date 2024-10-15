import axios from "axios";

export const commonApi = async (httpmethod, url, reqbody) => {
    const reqconfig = {
        method: httpmethod,
        url,
        data: reqbody,
        headers: { "Content-Type": "application/json" }
    }
    return await axios(reqconfig).then(result => {
        return result
    }).catch(error => {
        return error
    })
}
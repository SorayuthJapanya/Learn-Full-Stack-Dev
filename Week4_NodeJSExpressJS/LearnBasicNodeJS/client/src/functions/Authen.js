import axios from "axios";


export const authRegister = async (data) => {
    return await axios.post(import.meta.env.VITE_API_URL + "/register", data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const authLogin = async (data) => {
    return await axios.post(import.meta.env.VITE_API_URL + "/login", data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
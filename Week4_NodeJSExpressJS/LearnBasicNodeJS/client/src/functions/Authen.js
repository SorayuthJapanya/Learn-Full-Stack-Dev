import axios from "axios";


export const authRegister = async (data) => {
    return await axios.post(import.meta.env.VITE_API_URL + "/register", data)
}

export const authLogin = async (data) => {
    return await axios.post(import.meta.env.VITE_API_URL + "/login", data)
}

export const authCurrentUser = async (authtoken) => {
    return await axios.post(import.meta.env.VITE_API_URL + "/current-user", {}, {
        headers: {
            authtoken
        }
    })
}
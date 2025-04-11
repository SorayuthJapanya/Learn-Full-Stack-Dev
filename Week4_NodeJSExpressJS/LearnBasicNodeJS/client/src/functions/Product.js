import axios from "axios";

export async function getData() {
    return await axios
        .get(import.meta.env.
            VITE_API_URL + "/product")
}

export const deleteData = async (id) => {
    return await axios.delete(`${import.meta.env.VITE_API_URL}/product/${id}`);
}

export const addData = async (data) => {
    await axios.post(import.meta.env.VITE_API_URL + "/product", data)
}

export const readData = async (id) => {
    return await axios.get(`${import.meta.env.VITE_API_URL}/product/${id}`);
  };

export const updateData = async (id, data) => {
    return await axios.put(`${import.meta.env.VITE_API_URL}/product/${id}`, data);
  };
  
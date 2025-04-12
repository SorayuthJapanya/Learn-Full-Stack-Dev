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
    return await axios.post(import.meta.env.VITE_API_URL + "/product", data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const readData = async (id) => {
    return await axios.get(`${import.meta.env.VITE_API_URL}/product/${id}`);
};

export const updateData = async (id, data) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/product/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error; // Re-throw the error so calling code can handle it
    }
};

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    role: '',
    token: '',
    isLoggin: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.name = action.payload.name;
            state.role = action.payload.role;
            state.token = action.payload.token;
            state.isLoggin = true;
        },
        logout: (state) => {
            state.name = '';
            state.role = '';
            state.token = '';
            state.isLoggin = false;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = userSlice.actions

export default userSlice.reducer
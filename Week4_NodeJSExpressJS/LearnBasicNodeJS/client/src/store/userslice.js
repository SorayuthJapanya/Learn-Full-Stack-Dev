import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'Euro Sorayuth',
    user: 'Oraya'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => {
            state.value = "Euro"
            state.user = "Luv Oraya"
        },
        logout: (state) => {
            state.value = "Euro Still"
            state.user = "Luv Oraya"
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = userSlice.actions

export default userSlice.reducer
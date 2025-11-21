import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    username: string;
    isAuthenticated: boolean;
}

export interface LoginPayload {
    username: string;
}

const initialState: UserState = {
    isAuthenticated: false,
    username: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginPayload>) => {
            state.isAuthenticated = true;
            state.username = action.payload.username;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = "";
        }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
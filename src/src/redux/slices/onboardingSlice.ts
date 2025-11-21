import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
    name: string;
    age: string;
    email: string;
    profilePic: string;
}


export interface PaymentState {
    cardNumber: string;
    expiry: string;
    cvv: string;
}

export interface OnboardingState {
    completed: boolean;
    profile: ProfileState
    songs: string[];
    payment: PaymentState
}
const initialState: OnboardingState = {
    completed: false,

    profile: {
        name: "",
        age: "",
        email: "",
        profilePic: "",
    },

    songs: [],

    payment: {
        cardNumber: "",
        expiry: "",
        cvv: "",
    },
}

const onboardingSlice = createSlice({
    name: 'onboarding',
    initialState,
    reducers: {
        saveProfile: (state, action: PayloadAction<ProfileState>) => {
            state.profile = action.payload;
        },
        saveSongsToOnboarding: (state, action) => {
            state.songs = action.payload;
        },
        savePayment: (state, action: PayloadAction<PaymentState>) => {
            state.payment = action.payload;
        },
        markComplete: (state) => {
            state.completed = true;
        },
    }
})

export const { saveProfile, saveSongsToOnboarding, savePayment, markComplete } = onboardingSlice.actions;
export default onboardingSlice.reducer;
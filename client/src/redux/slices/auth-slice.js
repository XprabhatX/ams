import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: "Dr. Vaishali Patil",
        username: "vaishali",
        email: "vaishali.patil@tcetmumbai.in",
        userType: "teacher",
        imageUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    loading: false,
    token: localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token"))
        : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
    },
});

export const { setUser, setToken, setLoading } = authSlice.actions;
export default authSlice.reducer;

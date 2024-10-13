import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: null,
    email: null,
    isAuthorized: false,
    isLoginModalOpen: false,
  },
  reducers: {
    registrUser: (state, action) => {
      state.isAuthorized = action.payload.isAuthorized;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    loginUser: (state, action) => {
      state.isAuthorized = action.payload.isAuthorized;
    },
    openLoginModal: (state, action) => {
      state.isLoginModalOpen = action.payload;
    },
  },
});

export const { registrUser, loginUser, openLoginModal } = authSlice.actions;
export default authSlice.reducer;

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
      state.isAuthorized = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    loginUser: (state, action) => {
      state.isAuthorized = true;
    },
    openLoginModal: (state, action) => {
      state.isLoginModalOpen = action.payload;
    },
    logOutUser: (state, action) => {
      state.isAuthorized = false;
    },
  },
});

export const { registrUser, loginUser, logOutUser, openLoginModal } =
  authSlice.actions;
export default authSlice.reducer;

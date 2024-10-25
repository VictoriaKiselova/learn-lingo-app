import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesItems: [],
    modalBooking: false,
  },
  reducers: {
    addFavorites: (state, action) => {
      const existingIndex = state.favoritesItems.findIndex(
        favorite => favorite.id === action.payload.id
      );
      if (existingIndex === -1) {
        state.favoritesItems.push(action.payload);
      }
    },
    removeFavorites: (state, action) => {
      state.favoritesItems = state.favoritesItems.filter(
        favorite => favorite.id !== action.payload.id
      );
    },
    openModalBooking: (state, action) => {
      state.modalBooking = true;
    },
    closeModalBooking: (state, action) => {
      state.modalBooking = false;
    },
  },
});

export const {
  saveTeachers,
  addFavorites,
  removeFavorites,
  openModalBooking,
  closeModalBooking,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;

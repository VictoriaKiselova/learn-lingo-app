import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesItems: [],
    modalBooking: false,
  },
  reducers: {
    saveTeachers: (state, action) => {
      state.allTeachers.push(action.payload);
    },

    addFavorites: (state, action) => {
      state.favoritesItems.push(action.payload);
    },
    removeFavorites: (state, action) => {
      state.favoritesItems = state.favoritesItems.filter(
        favoriteId => favoriteId !== action.payload
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

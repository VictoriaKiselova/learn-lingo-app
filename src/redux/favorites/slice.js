import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesItems: [],
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
  },
});

export const { saveTeachers, addFavorites, removeFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;

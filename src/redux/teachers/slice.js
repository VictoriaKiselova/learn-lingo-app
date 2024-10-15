import { createSlice } from "@reduxjs/toolkit";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    teachersList: null,
  },
  reducers: {
    getTeachersList: (state, action) => {
      state.teachersList = action.payload;
    },
  },
});

export const { getTeachersList } = teachersSlice.actions;
export default teachersSlice.reducer;

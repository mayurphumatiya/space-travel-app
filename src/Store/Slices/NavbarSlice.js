import { createSelector, createSlice } from "@reduxjs/toolkit";

const showNavSlice = createSlice({
  name: "showNav",
  initialState: {
    show: true,
  },
  reducers: {
    showNav: (state, { payload }) => {
      state.showNav = payload;
    },
  },
});

export const { showNav } = showNavSlice.actions;

export const getOverlapSelector = createSelector(
  (state) => state.overlap,
  (state) => state
);

export default showNavSlice;

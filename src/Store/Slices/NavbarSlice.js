import { createSelector, createSlice } from "@reduxjs/toolkit";

const showNavSlice = createSlice({
  name: "showNav",
  initialState: {
    show: true,
  },
  reducers: {
    showNav: (state, { payload }) => {
      state.show = payload;
    },
  },
});

export const { showNav } = showNavSlice.actions;

export const getNavbarSelector = createSelector(
  (state) => state.showNav,
  (state) => state
);

export default showNavSlice;

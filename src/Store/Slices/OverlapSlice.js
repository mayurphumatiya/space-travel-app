import { createSelector, createSlice } from "@reduxjs/toolkit";

const overlapSlice = createSlice({
  name: "overlap",
  initialState: {
    overlap: false,
  },
  reducers: {
    overlappin: (state, { payload }) => {
      state.overlap = payload;
    },
  },
});

export const { overlappin } = overlapSlice.actions;

export const getOverlapSelector = createSelector(
  (state) => state.overlap,
  (state) => state
);
export default overlapSlice;

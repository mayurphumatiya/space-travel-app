import { createSelector, createSlice } from "@reduxjs/toolkit";

const destinationSlice = createSlice({
  name: "destination",
  initialState: {
    destination: {},
  },
  reducers: {
    saveDestination: (state, { payload }) => {
      state.destination = payload;
    },
  },
  extraReducers:{
    
  }
});

export const { saveDestination } = destinationSlice.actions;

export const getDestination = createSelector(
  (state) => state.destination,
  (state) => state
);

export default destinationSlice;

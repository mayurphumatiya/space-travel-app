import { createSelector, createSlice } from "@reduxjs/toolkit";
import { loadDestinations } from "./DestinationApi";

const destinationSlice = createSlice({
  name: "destination",
  initialState: {
    isLoading: false,
    destination: {},
    destinations: [],
  },
  reducers: {
    saveDestination: (state, { payload }) => {
      state.destination = payload;
    },
  },
  extraReducers: {
    [loadDestinations.pending]: (state) => {
      state.isLoading = true;
    },
    [loadDestinations.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.destinations = payload;
    },
  },
});

export const { saveDestination } = destinationSlice.actions;

export const getDestination = createSelector(
  (state) => state.destination,
  (state) => state
);

export default destinationSlice;

import { configureStore } from "@reduxjs/toolkit";
import overlapSlice from "./Slices/OverlapSlice";
import showNavSlice from "./Slices/NavbarSlice";
import destinationSlice from "./Slices/DestinationSlice";

const store = configureStore({
  reducer: {
    overlap: overlapSlice.reducer,
    showNav: showNavSlice.reducer,
    destination: destinationSlice.reducer,
  },
});

export default store;

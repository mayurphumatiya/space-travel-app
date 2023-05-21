import { configureStore } from "@reduxjs/toolkit";
import overlapSlice from "./Slices/OverlapSlice";
import showNavSlice from "./Slices/NavbarSlice";


const store = configureStore({
  reducer: {
    overlap: overlapSlice.reducer,
    showNav: showNavSlice.reducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import overlapSlice from "./Slices/OverlapSlice";


const store = configureStore({
  reducer: {
    overlap: overlapSlice.reducer,
  },
});

export default store;

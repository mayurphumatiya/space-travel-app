import { configureStore } from "@reduxjs/toolkit";
import overlapSlice from "./Slices/OverlapSlice";
import showNavSlice from "./Slices/NavbarSlice";
import destinationSlice from "./Slices/DestinationSlice";
import ticketSlice from "./Slices/TicketSlice";

const store = configureStore({
  reducer: {
    overlap: overlapSlice.reducer,
    showNav: showNavSlice.reducer,
    destination: destinationSlice.reducer,
    ticketBooking: ticketSlice.reducer
  },
});

export default store;

import { createSelector, createSlice } from "@reduxjs/toolkit";
import { bookingTickets } from "./TicketsAPIs";

const ticketSlice = createSlice({
    name:"ticketBooking",
    initialState:{
        isLoading:false,
        message:"",
        status:false
    },
    reducers:{},
    extraReducers:{
        [bookingTickets.pending]:(state, {payload})=>{
            state.isLoading = true;
        },
        [bookingTickets.fulfilled]:(state, {payload})=>{
            state.isLoading = false;
            state.message = payload.message;
            state.status = payload.status;
        }
    }
})

export const getTickets = createSelector(
    (state) => state.ticketBooking,
    (state) => state
  );

export default ticketSlice;
import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiRoutes from "../../utils/ApiRoutes.json";
import axios from "axios";

export const bookingTickets = createAsyncThunk(
  "bookingTickets",
  async (data, { rejectWithValue }) => {
    try {
      const headers = {
        token: localStorage.getItem(`token`),
      };
      const response = await axios.post(
        `${ApiRoutes.url.production}${ApiRoutes.api.TICKET_BOOKING}`,
        data,
        { headers: headers }
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

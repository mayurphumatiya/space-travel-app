import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ApiRoutes from "../../utils/ApiRoutes.json";

export const loadDestinations = createAsyncThunk(
  "loadDestinations",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${ApiRoutes.url.local}${ApiRoutes.api.LOAD_DESTINATIONS}`
      );
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

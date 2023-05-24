import { createAsyncThunk } from "@reduxjs/toolkit";

const loadDestinations = createAsyncThunk('loadDestinations' ,async(data, {rejectWithValue}) =>{
    try{
        
    }catch(e){
        return rejectWithValue(e)
    }

})
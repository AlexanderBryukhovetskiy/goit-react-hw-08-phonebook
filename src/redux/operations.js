import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63ffa9a89f8449102982c6ee.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", 
async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    console.log("response.data:", response.data);
    return response.data;
  }
  catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63ffa9a89f8449102982c6ee.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll", 
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      console.log("response.data:", response.data);
      return response.data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async( newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);

      console.log(response.data);

      return response.data;
    } 
    catch(error){
      return thunkAPI.rejectWithValue(error.message);
    };
  }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
  async(id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    };
  }
);
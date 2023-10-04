import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://651c703be904fefd4c086a81.mockapi.io/contacts";

export const fectchContacts = createAsyncThunk("contacts/fetchAll", 
async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const addContacts = createAsyncThunk("contacts/addContacts",
async(contacts, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contacts)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const deleteContact = createAsyncThunk("contacts/deleteContact",
async(id, thunkAPI)=>{
  try {
    const response = await axios.delete(`/contacts/${id}`)
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
  }
}
)
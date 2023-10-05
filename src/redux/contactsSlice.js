import { createSlice} from "@reduxjs/toolkit";
import { fectchContacts, addContacts ,deleteContact } from "./operations";

const handlePending = (state)=>{
    state.isLoading = true;
} 
const handleError = (state, action) =>{
    state.isLoading = false;
    state.error = action.payload;
}

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
  };
const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
   extraReducers:{
    [fectchContacts.pending]: handlePending,
    [fectchContacts.rejected]: handleError,
    [addContacts.pending]: handlePending,
    [addContacts.error]: handleError,
    [deleteContact.pending]: handlePending,
    [deleteContact.error]: handleError,

    [fectchContacts.fulfilled] (state, action){
        state.isLoading = false;
        state.error = null;
        state.items =action.payload;
    },
    [addContacts.fulfilled](state, action){
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload)
    },
    [deleteContact.fulfilled] (state, action){
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
            contact => contact.id ===action.payload
        )
        state.items.splice(index,1)
    },
    
   } 
})


export const contactReducer = contactsSlice.reducer;
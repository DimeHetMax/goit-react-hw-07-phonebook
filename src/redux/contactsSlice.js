import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [];
const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers:{
        addContacts:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(name, phone){
                return {
                    payload:{
                        name,
                        phone,
                        id: nanoid()
                    }
                }
            }
        },
        deleteContact(state,action){
           return state.filter(state => state.id !== action.payload)
        }
    }
})

export const {addContacts, deleteContact} = contactsSlice.actions
export const contactReducer = contactsSlice.reducer;
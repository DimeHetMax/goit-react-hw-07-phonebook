import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { rootReducer } from "./reducer";
import { combineReducers } from 'redux'
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
})
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({reducer:persistedReducer});
export const persistor = persistStore(store)
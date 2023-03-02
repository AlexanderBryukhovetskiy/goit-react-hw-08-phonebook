import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts } from "./operations";

// const contactsInitialState = [];

// const contactsSlice = createSlice( { 
//   name: 'contacts',

//   initialState: contactsInitialState,

//   reducers: {
//     addContact(state, action) {
//       return [...state, action.payload];
//     },

//     deleteContact (state, action) {
//       return state.filter( contact => contact.id !== action.payload);
//     }  
//   }
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;


const contactsSlice = createSlice( { 
  name: 'contacts',

  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state){
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action){
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action){
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
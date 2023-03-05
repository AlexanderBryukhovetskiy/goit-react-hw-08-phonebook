import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action?.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
}

const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = (type) => extraActions.map(action => action[type]);

const contactsSlice = createSlice( { 
  name: 'contacts',

  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    return builder
      .addCase(fetchContacts.fulfilled, (state, action)=>{
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action)=>{
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action)=>{
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id);
        state.contacts.splice(index, 1);
      })
      .addMatcher(isAnyOf(
        // ...extraActions.map(action => action.pending), state => 
        // state.isLoading = true
        ...getActions("pending"), state => state.isLoading = true
      ))
      .addMatcher(isAnyOf(
        // ...extraActions.map(action => action.rejected), handleRejected
        ...getActions("rejected"), handleRejected
      ))
      .addMatcher(isAnyOf(
        // ...extraActions.map(action => action.fulfilled), handleFulfilled
        ...getActions("fulfilled"), handleFulfilled
      ))
      //  -- previous code of .addMatcher in this Slide-------
      // .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), state => state.isLoading = true)
      // .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected,deleteContact.rejected), handleRejected)
      // .addMatcher(isAnyOf(fetchContacts.fulfilled, addContact.fulfilled,deleteContact.fulfilled), handleFulfilled)
      //------------------------------------------------------
  },

  //----previous code of contactsSlice:
  // const contactsSlice = createSlice( { 
  //   name: 'contacts',
  
  //   initialState: {
  //     contacts: [],
  //     isLoading: false,
  //     error: null,
  //   },
  // extraReducers: {
  //   [fetchContacts.pending] (state){
  //     state.isLoading = true},
  //   [addContact.pending] (state){
  //     state.isLoading = true},
  //   [deleteContact.pending]  (state){
  //     state.isLoading = true},,
  //   [fetchContacts.rejected]: handleRejected,
  //   [addContact.rejected]: handleRejected,
  //   [deleteContact.rejected]: handleRejected,

  //   [fetchContacts.fulfilled](state, action){
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts = action.payload;
  //   },
  //   [addContact.fulfilled](state, action){
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts.push(action.payload);
  //   },
  //   [deleteContact.fulfilled](state, action){
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.contacts.findIndex(
  //       contact => contact.id === action.payload.id);
  //     state.contacts.splice(index, 1);
  //   },
  // },
});

export const contactsReducer = contactsSlice.reducer;
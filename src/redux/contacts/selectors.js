export const selectContacts = state => state.contacts.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter; 

export const selectVisibleContacts = state => {
  const contactsList = selectContacts(state);
  const filterValue =  selectFilter(state) ;

  if (contactsList.length > 0) {
    const searchingName = filterValue.trim().toLowerCase();  
    
    const visibleContacts = contactsList.filter( 
      contact => contact.name.toLowerCase().includes(searchingName));

    console.log("visibleContacts :", visibleContacts);

    return visibleContacts;
  }
};
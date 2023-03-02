import React from "react";
import css from "./ContactList.module.css";
import { useSelector, 
  // useDispatch
} from "react-redux";
// import { deleteContact } from "redux/contactsSlice";
import { getContacts, getFilter } from "redux/selectors";



const ContactList = () => {

  const contactsList = useSelector( getContacts );
  const filterValue = useSelector( getFilter) ;

  console.log("contactsList in ContactList :", contactsList);
  console.log("filterValue in ContactList :", filterValue);

  // const dispatch = useDispatch();

  if (contactsList?.length > 0) {

    const searchingName = filterValue.trim().toLowerCase();  

    const filteredContacts = contactsList.filter( 
      contact => contact.name.toLowerCase().includes(searchingName));

    return <ul className={css.list}>
      {filteredContacts.map( ({ id, name, number })  => (  
        
        <li key={id} className={css.listItem}>
          <p className={css.contactName}>{name} : </p>
          <p className={css.contactNumber}>{number}</p>
        
          <button type="button" className={css.deleteBtn}
            onClick={
              // () => {dispatch(deleteContact(id)) }  // old code 
              
              console.log('Message from ContactList: You try to delete contact from phonebook, but there is no code to do this action. You need to write code to add contact!')
              }  
          >Delete
          </button>
        </li>
        )
      )}
      </ul>
  }
};

export default ContactList;

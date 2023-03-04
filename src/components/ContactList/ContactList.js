import React from "react";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import { selectContacts, selectFilter } from "redux/selectors";



const ContactList = () => {

  const contactsList = useSelector( selectContacts );
  const filterValue = useSelector( selectFilter) ;

  // console.log("contactsList in ContactList :", contactsList);
  // console.log("filterValue in ContactList :", filterValue);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("id in handleDelete:",id);
    dispatch(deleteContact(id));
  };

  if (contactsList?.length > 0) {

    const searchingName = filterValue.trim().toLowerCase();  

    const filteredContacts = contactsList.filter( 
      contact => contact.name.toLowerCase().includes(searchingName));

    return <ul className={css.list}>
      {filteredContacts.map( ({ id, name, phone }) => (  
        
        <li key={id} className={css.listItem}>
          <p className={css.contactName}>{name} : </p>
          <p className={css.contactNumber}>{phone}</p>
        
          <button type="button" className={css.deleteBtn}
            onClick={() => handleDelete(id)} 
          >Delete
          </button>
        </li>
        )
      )}
      </ul>
  }
};

export default ContactList;

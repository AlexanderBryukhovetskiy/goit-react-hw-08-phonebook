import React from "react";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import { selectVisibleContacts } from "redux/selectors";

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  const handleDelete = (contactId) => {
    dispatch( deleteContact(contactId) );

    console.log("deleting contact.id:", contactId);
  };

  return (visibleContacts && 
    <ul className={css.list}>
    {visibleContacts.map( ({ name, phone, id }) => (  
      
      <li key={id} className={css.listItem}>
        <p className={css.contactName}>{name} : </p>
        <p className={css.contactNumber}>{phone}</p>
      
        <button 
          type="button" 
          className={css.deleteBtn}
          onClick={() => handleDelete(id)}
        >Delete
        </button>
      </li>
      )
    )}
    </ul>
  )
};

export default ContactList;
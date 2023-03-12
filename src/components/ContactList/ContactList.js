import React from "react";
import css from "./ContactList.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectVisibleContacts } from "redux/contacts/selectors";
import { fetchContacts, deleteContact  } from "redux/contacts/operations";


const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (visibleContacts 
  && <ul className={css.list}>
    {visibleContacts.map( ({ name, number, id }) => (  
      
      <li key={id} className={css.listItem}>
        <p className={css.contactName}>{name} : </p>
        <p className={css.contactNumber}>{number}</p>
      
        <button 
          type="button" 
          className={css.deleteBtn}
          onClick={() => {dispatch(deleteContact(id))}}
        >Delete
        </button>
      </li>
      )
    )}
    </ul>
  )
};

export default ContactList;
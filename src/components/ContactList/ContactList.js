import React from "react";
import css from "./ContactList.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectVisibleContacts } from "redux/selectors";
import { fetchContacts, deleteContact  } from "redux/operations";


const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (visibleContacts 
  && <ul className={css.list}>
    {visibleContacts.map( ({ name, phone, id }) => (  
      
      <li key={id} className={css.listItem}>
        <p className={css.contactName}>{name} : </p>
        <p className={css.contactNumber}>{phone}</p>
      
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
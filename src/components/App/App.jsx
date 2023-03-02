//npm install redux
// npm install react-redux
//npm install @redux-devtools/extension
//npm install @reduxjs/toolkit

// npm install @reduxjs/toolkit react-redux
// npm i redux-persist

// next npx is not used because HW based on template:
// npx create-react-app my-app --template redux


import css from "./App.module.css";
import Layout from "../Layout";
import ContactForm from "components/ContactForm";
import  ContactList  from "../ContactList";
import Filter from "../Filter";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";

const App = () => {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (  
    <Layout>
      <div className={css.phoneBookContainer}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm/>
      </div>

      <h2 className={css.title}>Contacts</h2> 
      <Filter/>
      <ContactList/>
    </Layout>
  )
};

export default App;
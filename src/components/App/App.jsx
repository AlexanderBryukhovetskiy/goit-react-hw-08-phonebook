//npm install redux
// npm install react-redux
//npm install @redux-devtools/extension
//npm install @reduxjs/toolkit

// npm install @reduxjs/toolkit react-redux

// next npx is not used because HW based on template:
// npx create-react-app my-app --template redux


import css from "./App.module.css";
import Layout from "../Layout";
import ContactForm from "components/ContactForm";
import  ContactList  from "../ContactList";
import Filter from "../Filter";
import { useSelector } from "react-redux";
import { selectIsLoading, selectError } from "redux/selectors";

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (  
    <Layout>
      <div className={css.phoneBookContainer}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm/>
      </div>

      <h2 className={css.title}>Contacts</h2> 
      <Filter/>
      {isLoading && !error 
      && <b className={css.isLoadingMessage}>Request in progress...</b>}
      <ContactList/>
    </Layout>
  )
};

export default App;
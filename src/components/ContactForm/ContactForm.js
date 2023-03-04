import css from "./ContactForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "redux/selectors";
import { addContact } from "redux/operations";


const ContactForm = () => {
  const state = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value; 
    const number = form.elements.number.value;

    const isUnique = state.filter( savedContact => 
      savedContact.name.toLowerCase() === name.toLowerCase() );
    
    if (isUnique.length > 0) {
      return alert (`${name} is already in contacts.`);
    }
    else { 
      const newContact = {
        name, 
        phone: number,
      };
      dispatch(addContact( newContact ));
      console.log('add new contact:', newContact);
    }
    
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          minLength={5}
          maxLength={13}
          required
        />
      </label>

      <button className={css.submitBtn} type="submit">Add contact</button>
    </form>
  )
};

export default ContactForm;
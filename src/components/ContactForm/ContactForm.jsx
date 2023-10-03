import { useDispatch, useSelector} from "react-redux";
import { getContacts } from "redux/selectors";
// import { addContacts } from "redux/actions";
import { addContacts } from "redux/contactsSlice";
import css from "./ContactForm.module.css"

export const ContactForm = ()=>{
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault()
    const name = event.target.elements.name.value;
    const phone = event.target.elements.number.value;
    const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (existingContact) {
      alert('This name already exists in the phonebook!');
      return;
    }
    dispatch(addContacts(name, phone))
    event.target.reset();
  }
  return (
    <form onSubmit={addContact}>
      <label>
        Name
        <input
          className={css.inputs}
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          style={{ display: "block", marginTop: 10, marginBottom: 20 }}
        />
      </label>
      <label>
        Number
        <input
          className={css.inputs}
          type="tel"
          name="number"
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          style={{ display: "block", marginTop: 10, marginBottom: 20 }}
        />
      </label>
      <button type="submit" className={css.button}>Add Contact</button>
    </form>
  );
}
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { getIsLoading, getError } from "redux/selectors";
import { fectchContacts } from "redux/operations";
import "../index.css"

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading)
  const error =useSelector(getError)

  useEffect(() => {
    dispatch(fectchContacts());
  }, [dispatch]);

  return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error &&  <b>Request in progress</b>}
        <ContactList/>   
      </div>
    );
}
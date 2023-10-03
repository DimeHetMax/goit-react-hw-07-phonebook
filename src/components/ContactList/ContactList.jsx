import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/actions';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import css from "./ContactList.module.css"

 export const ContactList = () => {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)
  const dispatch = useDispatch()

  const handleFilteredContacts = filteredContacts =>{
    return filteredContacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };  
  return (
    <ul className={css.list}>
      {filter === '' ? (
        contacts.map(({ name, phone, id }) => 
            {return <li className ={css.phoneItem} key={id}><p>{name}: {phone}</p><button type='button' className={css.button} onClick={() => dispatch(deleteContact(id))}>Delete</button></li>;}
          )
        ) : (
          handleFilteredContacts(contacts).map(({ id, name, phone }) =>   
          {return <li className ={css.phoneItem} key={id}><p>{name}: {phone}</p><button type='button' className={css.button} onClick={() => dispatch(deleteContact(id))}>Delete</button></li>;}
          )
      )}
    </ul>
  );
 }
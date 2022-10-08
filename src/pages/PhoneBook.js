import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { FormInput } from '../components/FormInput/FormInput';
import { Filter } from '../components/Filter/Filter';
import { ContactsList } from '../components/ContactsList/ContactsList';

import css from './PhoneBook.module.css';

export default function Tasks() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.title}>Phone Book</h1>
      <FormInput />
      {contacts.length >= 1 && <Filter />}
      <h2 className={css.title}> Contacts</h2>
      <ContactsList />
    </>
  );
}

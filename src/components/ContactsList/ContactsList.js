import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/operations';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';
import { ContactItem } from '../ContactsItem/ContactItem';

import css from './ContactsList.module.css';

export const ContactsList = () => {
  let contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const onRemoveContact = id => {
    dispatch(deleteContact(id));
  };

  if (filter !== '') {
    const normalizedFilter = filter.toLowerCase();
    const filteredContact = contacts.filter(itm =>
      itm.name.toLowerCase().includes(normalizedFilter),
    );
    contacts = filteredContact;
  }

  return (
    <ul>
      {contacts.map(contacts => (
        <ContactItem key={contacts.id} contact={contacts} onRemoveContact={onRemoveContact} />
      ))}
    </ul>
  );
};

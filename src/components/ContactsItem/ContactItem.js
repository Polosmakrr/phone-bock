import React, { useState } from 'react';
import PropTypes from 'prop-types';

import css from './ContactsItem.module.css';
import { useDispatch } from 'react-redux';
import { changeContact } from '../../redux/contacts/operations';

export const ContactItem = ({ contact, onRemoveContact }) => {
  const [editContactId, setEditContactId] = useState('');
  const [editName, setEditName] = useState('');
  const [editNumber, setEditNumber] = useState('');

  const dispatch = useDispatch();

  const editUserContact = (id, name, number) => {
    setEditContactId(id);
    setEditName(name);
    setEditNumber(number);
  };

  const saveContactChanges = e => {
    e.preventDefault();

    setEditContactId('');
    setEditName('');
    setEditNumber('');
    dispatch(changeContact({ id: editContactId, name: editName, number: editNumber }));
  };

  return (
    <li className={css.listItem}>
      {contact.id !== editContactId ? (
        <div className={css.contactBlock}>
          <div className={css.contacts}>
            <p>{contact.name}:</p>
            <p>{contact.number}</p>
          </div>
          <div>
            <button
              className={css.removeBtn}
              onClick={() => onRemoveContact(contact.id)}
              type="button"
            >
              Remove
            </button>
            <button
              onClick={() => editUserContact(contact.id, contact.name, contact.number)}
              type="button"
            >
              Edit
            </button>
          </div>
        </div>
      ) : (
        <form className={css.form} onSubmit={saveContactChanges}>
          <div className={css.inputBlock}>
            <input
              className={css.inputChange}
              value={editName}
              onChange={e => setEditName(e.currentTarget.value)}
              type="text"
              name="name"
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <input
              className={css.inputChange}
              value={editNumber}
              onChange={e => setEditNumber(e.currentTarget.value)}
              type="tel"
              name="phone"
              placeholder="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <div>
            <button
              className={css.removeBtn}
              onClick={() => onRemoveContact(contact.id)}
              type="button"
            >
              Remove
            </button>
            <button type="submit">save</button>
          </div>
        </form>
      )}
    </li>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

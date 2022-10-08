import React from 'react';
import PropTypes from 'prop-types';

import css from './ContactsItem.module.css';

export const ContactItem = ({ contact, onRemoveContact }) => {
  return (
    <li className={css.list}>
      <p>{contact.name}:</p>
      <div className={css.block}>
        <p className={css.number}> {contact.number}</p>
        <button onClick={() => onRemoveContact(contact.id)} type="button">
          Remove
        </button>
      </div>
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

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addContact } from '../../redux/contacts/operations';

import css from './FormInput.module.css';

export const FormInput = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (name, number) => {
    dispatch(addContact({ name, number }));
  };
  const hendleNameChange = event => {
    setName(event.target.value);
  };
  const hendlePhoneChange = event => {
    setNumber(event.target.value);
  };

  const hendleSave = event => {
    event.preventDefault();

    onSubmit(name, number);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={hendleSave}>
      <label>
        Name
        <input
          className={css.lable}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={hendleNameChange}
        />
      </label>
      <br />
      <label>
        Phone
        <input
          className={css.lable}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={hendlePhoneChange}
        />
      </label>
      <br />
      <button className={css.btn} type="submit">
        Save
      </button>
    </form>
  );
};

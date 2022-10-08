import React from 'react';
import { useDispatch } from 'react-redux';

import { changeFilter } from '../../redux/contacts/filterSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <form className={css.form}>
      <label className={css.label}>
        Find contacts by name
        <br />
        <input type="text" onChange={onChangeFilter}></input>
      </label>
    </form>
  );
};

import React from 'react';
import '../stylesheets/FilterByName.scss';

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };
  return (
    <>
      <label className='form__label--name' htmlFor='name'>
        "Welcome to the club!"
      </label>
      <input
        className='form__input'
        type='text'
        name='name'
        id='name'
        value={props.nameFilter}
        placeholder='Search some pals...'
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;

import React from 'react';

const FilterByName = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };
  return (
    <>
      <label className='form__label' htmlFor='name'>
        "Welcome to the club!"
      </label>
      <input
        className='form__input'
        type='text'
        name='name'
        id='name'
        placeholder='Search some pals...'
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;

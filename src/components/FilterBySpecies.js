import React from 'react';

const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'species',
    });
  };
  return (
    <>
      <label className='form__label display-block' htmlFor='species'>
        Species:
      </label>

      <select
        className='form__select'
        name='species'
        id='species'
        onChange={handleChange}
      >
        <option value='all'>All</option>
        <option value='Human'>Human</option>
        <option value='Alien'>Alien</option>
      </select>
    </>
  );
};

export default FilterBySpecies;

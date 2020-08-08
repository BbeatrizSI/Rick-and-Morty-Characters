import React from 'react';

const FilterByDead = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'dead',
      checked: ev.target.checked,
    });
  };
  return (
    <label className='form__label'>
      <input
        className='form__checkbox'
        type='checkbox'
        name='dead'
        value='dead'
        checked={props.deadFilter}
        onChange={handleChange}
      />
      These kicked the bucket
    </label>
  );
};

export default FilterByDead;

import React from 'react';
import '../stylesheets/FilterByName.scss';

const FilterByName = (props) => {
  // En cada input se maneja el valor y se asigna una key para subirlos por lifting de tal manera que una sola función handle pueda manejar todos los filtros en App.
  // En el campo "value" del input se muestra el valor actualizado de su estado que llega por props.
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

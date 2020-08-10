import React from 'react';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByDead from './FilterByDead';
import PropTypes from 'prop-types';
import '../stylesheets/Filters.scss';

const Filters = (props) => {
  // Creo esta función para prevenir el envío del formulario al pulsar enter en los input.
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <section>
      <form className='form' onSubmit={handleForm}>
        <FilterByName
          handleFilter={props.handleFilter}
          nameFilter={props.nameFilter}
        />
        <div className='filters__container'>
          <FilterBySpecies
            handleFilter={props.handleFilter}
            speciesFilter={props.speciesFilter}
          />
          <FilterByDead
            handleFilter={props.handleFilter}
            deadFilter={props.deadFilter}
          />
        </div>
      </form>
    </section>
  );
};

Filters.propTypes = {
  handleFilter: PropTypes.func,
  nameFilter: PropTypes.string,
  speciesFilter: PropTypes.string,
  deadFilter: PropTypes.bool,
};

export default Filters;

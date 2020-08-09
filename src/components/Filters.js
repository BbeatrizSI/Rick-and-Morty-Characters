import React from 'react';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByDead from './FilterByDead';

const Filters = (props) => {
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
        <FilterBySpecies
          handleFilter={props.handleFilter}
          speciesFilter={props.speciesFilter}
        />
        <FilterByDead
          handleFilter={props.handleFilter}
          deadFilter={props.deadFilter}
        />
      </form>
    </section>
  );
};

export default Filters;

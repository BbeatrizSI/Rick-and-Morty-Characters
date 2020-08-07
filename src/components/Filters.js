import React from 'react';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByDead from './FilterByDead';

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterByName handleFilter={props.handleFilter} />
        <FilterBySpecies handleFilter={props.handleFilter} />
        <FilterByDead handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};

export default Filters;

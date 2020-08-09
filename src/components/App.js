import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Filters from './Filters';
import NoMatch from './NoMatch';
import '../stylesheets/App.scss';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('all');
  const [deadFilter, setDeadFilter] = useState(false);

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  //HANDLER

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'species') {
      setSpeciesFilter(data.value);
    } else if (data.key === 'dead') {
      setDeadFilter(data.checked);
    }
  };

  //RENDER

  const renderCharacterDetails = (props) => {
    const routeCharacterId = Number(props.match.params.id);

    const character = characters.find(
      (character) => character.id === routeCharacterId
    );

    if (character) {
      return (
        <CharacterDetails
          name={character.name}
          image={character.image}
          species={character.species}
          planet={character.origin.name}
          status={character.status}
          episodes={character.episode.length}
          type={character.type}
          gender={character.gender}
        />
      );
    } else {
      return <NoMatch />;
    }
  };

  const renderFilteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(nameFilter.toLowerCase());
    })
    .filter((character) => {
      return speciesFilter === 'all'
        ? true
        : character.species === speciesFilter;
    })
    .filter((character) => {
      return deadFilter === true
        ? character.status === 'Dead'
        : character.status !== '';
    })
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div className='page'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Filters
            handleFilter={handleFilter}
            nameFilter={nameFilter}
            speciesFilter={speciesFilter}
            deadFilter={deadFilter}
          />
          <CharacterList characters={renderFilteredCharacters} />
        </Route>
        <Route exact path='/character/:id' render={renderCharacterDetails} />
        <Route path='*' component={NoMatch} />
      </Switch>
    </div>
  );
};

export default App;

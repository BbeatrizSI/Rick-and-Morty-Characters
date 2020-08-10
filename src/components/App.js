import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Filters from './Filters';
import NoMatch from './NoMatch';
import PropTypes from 'prop-types';
import '../stylesheets/App.scss';

const App = () => {
  //Creo el estado inicial de characters (con un hook) como un array vacío. También los estados iniciales de los 3 filtros.
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('all');
  const [deadFilter, setDeadFilter] = useState(false);

  //Fetch del Api y modifico el estado de characters con los datos recibidos (array vacío 2ºparámetro para evitar bucle infinito)
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  //HANDLER
  // Función que paso por props a los filters y que me devuelven por lifting los valores de los inputs. Modifico el estado de cada filter.
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
  // Función que compara el id del personaje que clickeo con los id de todos para localizar cual es. Si existe retorna el componente de Detalle, si no el de NoMatch (siempre va a estar).
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

  // Función que concatena los filtros de nombre, especie y muerte y ordena el resultado alfabéticamente.
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

  // Estructura html en JSX
  // Filters: le paso la función manejadora y los estados de los 3 filtros por props para completar el ciclo de datos de los inputs en React.
  // CharacterList: le paso por props la info de los personajes filtrada y ordenada.
  // CharacterDetails: le asigno la ruta definida en Characters con React-Router y pinto el resultado de la función renderCharacterDetails.
  // Al componente NoMatch también le asigno una ruta "*" para que si se navega a una ruta no existente se pinte.
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

App.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  planet: PropTypes.string,
  status: PropTypes.string,
  episodes: PropTypes.number,
  type: PropTypes.string,
  gender: PropTypes.string,
  handleFilter: PropTypes.func,
  nameFilter: PropTypes.string,
  speciesFilter: PropTypes.string,
  deadFilter: PropTypes.string,
  characters: PropTypes.array,
};

export default App;

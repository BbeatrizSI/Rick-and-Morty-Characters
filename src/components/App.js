import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import ErrorImage from '../images/error.png';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const renderCharacterDetails = (props) => {
    const routeChracterId = Number(props.match.params.id);

    const character = characters.find(
      (character) => character.id === routeChracterId
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
      return (
        <img
          src={ErrorImage}
          alt='Personaje no encontrado'
          title='Personaje no encontrado'
        />
      );
    }
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <CharacterList characters={characters} />
        </Route>
        <Route path='/character/:id' render={renderCharacterDetails} />
      </Switch>
    </div>
  );
};

export default App;

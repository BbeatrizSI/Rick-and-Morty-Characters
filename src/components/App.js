import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import Header from './Header';
import CharacterList from './CharacterList';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div>
      <Header />
      <CharacterList />
    </div>
  );
};

export default App;

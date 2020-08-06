import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import Header from './Header';

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
    </div>
  );
};

export default App;

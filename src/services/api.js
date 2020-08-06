const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results.map((character) => {
        return character;
      });

      return characters;
    });
};

export default getDataFromApi;

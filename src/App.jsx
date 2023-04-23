import { useState, useEffect } from 'react';
import axios from 'axios';

/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id


DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.

-----

caso eu usasse as habilidades:

<p>Habilidades:</p>
      <ul>
        {data.abilities && data.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      
*/

function App() {


  const [data, setData] = useState([]);

  useEffect(() => {
    const promises = [];
    for (let id = 1; id <= 20; id++) {
      const promise = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      promises.push(promise);
    } // cada dado (poke id) buscado, será jogado pro array promises
    Promise.all(promises)
      .then((responses) => {
        const pokemonData = responses.map((response) => response.data);
        setData(pokemonData);
        console.log(pokemonData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>


      <div className="logo-space"><img className='logo' src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1" alt="" /></div>

      <div className="wrapper">
        {data.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <div className="pokemon-image-container">
              <img
                className="pokemon-image"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
            </div>
            <div className="pokemon-info-container">
              <h2 className="pokemon-name">{pokemon.name}</h2>
              <p className="pokemon-experience">
                Experience: {pokemon.base_experience}
              </p>
            </div>
          </div>
        ))}
      </div>

    </>



  );
}

export default App;

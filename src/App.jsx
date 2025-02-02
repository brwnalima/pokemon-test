import { useState, useEffect } from 'react';
import axios from 'axios';
import { Slide, Fade } from "react-awesome-reveal";

/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id < o id é um parâmetro de url


DICA:
imagem => sprites.front_default // estava errado, dava erro e usei 
experiência => base_experience

EXTRA: se puder ordene por nome.

ELE FEZ DIF

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

  // o hook renderiza todos os dados recebidos
  useEffect(() => {
    const promises = [];
    for (let id = 1; id <= 54; id++) {
      const promise = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      promises.push(promise);
    } // cada dado (poke id) buscado, será jogado pro array promises
    Promise.all(promises)
      .then((responses) => {
        const pokemonData = responses.map((response) => response.data);
        pokemonData.sort((a, b) => a.name.localeCompare(b.name)); // ordem alfabetica
        setData(pokemonData);
        console.log(pokemonData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>


      <Fade duration={3200}>
        <div className="logo-space"><img className='logo' src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1" alt="" /></div>
      </Fade>

      <Slide duration={3000}>
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
      </Slide>

    </>



  );
}

export default App;

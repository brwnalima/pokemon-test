import { useState } from 'react';
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
  let id = 0;
  let apiUrl = ``

  for (let index = 0; index <= 20; index++) {
    id += index  
    apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  }

  

  axios.get(apiUrl)
    .then(response => {
      setData(response.data)
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })





  return (
    <>
    
     <h1>POKEMÓNS</h1>
     <hr/>
      <div className="wrapper">
        <div className="pokemon-card">
          <div className="pokemon-image-container">
            <img className='pokemon-image' src={data.sprites?.front_default} alt={data.name} />
          </div>
          <div className="pokemon-info-container">
            <h2 className="pokemon-name">{data.name}</h2>
            <p className="pokemon-experience">Experience: {data.base_experience}</p>
          </div>
        </div>
        <div className="pokemon-card">
          <div className="pokemon-image-container">
            <img className='pokemon-image' src={data.sprites?.front_default} alt={data.name} />
          </div>
          <div className="pokemon-info-container">
            <h2 className="pokemon-name">{data.name}</h2>
            <p className="pokemon-experience">Experience: {data.base_experience}</p>
          </div>
        </div>
        <div className="pokemon-card">
          <div className="pokemon-image-container">
            <img className='pokemon-image' src={data.sprites?.front_default} alt={data.name} />
          </div>
          <div className="pokemon-info-container">
            <h2 className="pokemon-name">{data.name}</h2>
            <p className="pokemon-experience">Experience: {data.base_experience}</p>
          </div>
        </div>
      </div>

      

    </>


  );
}

export default App;

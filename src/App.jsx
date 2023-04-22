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
*/

function App() {

  const [data, setData] = useState([]);

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/1/`;

  axios.get(apiUrl)
    .then(response => {
      console.log(response.data);
      setData(response.data)
    })
    .catch(error => {
      console.log(error);
    })





  return (
    <>
      <h3>desafio fernandev</h3>
      <h1>consumir api pokémon</h1>
      <p>{data.name}</p>
      <p>Habilidades:</p>
      <ul>
        {data.abilities && data.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <p>{data.base_experience}</p>
      <img src={data.sprites.front_shiny} alt={data.name}/>
    </>
  );
}

export default App;

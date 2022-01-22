import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { pokemonContext } from '../helper/context';

const style = {
  container: {
    minHeight: '90vh',
    backgroundColor: 'whitesmoke',
    display: 'flex',
    flexDirection: 'column',
  },
};

function Details() {
  let param = useParams();
  //   const [pokemon, setPokemon] = useState({});
  //   console.log(pokemon)
  const { pokemon, setPokemon } = useContext(pokemonContext);
  console.log(pokemon);

  const fetchDetail = () => {
    // get pokemon name from parameter
    const paramName = param.name;

    const gqlQuery = `query pokemon($name: String!) {
        pokemon(name: $name) {
    		id
    		name
    		abilities {
            ability {
              name
            }
          }
    			types {
            slot
            type {
              name
            }
          }
    			stats {
            base_stat
            effort
            stat {
              name
            }
          }
    			moves {
            move {
              name
            }
          }
    			location_area_encounters
    			status
    			message
        }
      }`;

    const gqlVariables = {
      name: paramName,
    };
    fetch('https://graphql-pokeapi.graphcdn.app/', {
      credentials: 'omit',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: gqlQuery,
        variables: gqlVariables,
      }),
      method: 'POST',
    })
      .then((res) => res.json())
      .then((res) => {
        setPokemon({ ...pokemon, ...res.data.pokemon });
      });
  };
  useEffect(() => {
    fetchDetail();
  }, []);
  return (
    <div css={style.container}>
      <div>
        <img src={pokemon.image} alt="" css={{ width: '5em' }} />
        <h2>{pokemon.name}</h2>
      </div>
      <div></div>
    </div>
  );
}

export default Details;

import React, { useEffect, useState, useContext } from 'react';
import pikachu from '../assets/pikachu.png';
import ash from '../assets/Hoennash.png';
import Button from '../components/Button';
import { theme } from '../helper/theme';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { pokemonContext } from '../helper/context';

const styleCont = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '2em',
  },
  cardCont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: 'white',
    padding: '2em',
    minHeight: '90vh',
  },
  cardSect: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridRowGap: '25px',
    zIndex: '1',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '20px 2em',
    zIndex: '1',
  },
};
const styleImg = {
  pikachu: {
    width: '125px',
    position: 'fixed',
    top: '6em',
    right: '2em',
  },
  ash: {
    width: '200px',
    position: 'absolute',
    top: '2em',
    right: '2em',
  },
};
const styleText = {
  title: {
    fontSize: '2rem',
    fontWeight: '800',
    letterSpacing: '.7px',
    color: theme.color.darkBlue,
    textAlign: 'center',
  },
};

function Home() {
  const { pokemon, setPokemon, list, setList, myList } =
    useContext(pokemonContext);

  const fetchList = () => {
    const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
          count
          nextOffset
          previous
          status
          message
          results {
            id
            name
            image
          }
        }
      }`;

    const gqlVariables = {
      limit: 6,
      offset: list.length,
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
        const pokemonList = [...list, ...res.data.pokemons.results];
        const newPokemonList = pokemonList.map((e) => ({ ...e, owned: 0 }));
        setList(newPokemonList);
      });
  };

  useEffect(() => {
    if (list.length === 0) {
      if (localStorage.getItem('list') !== null) {
        const newList = JSON.parse(localStorage.getItem('list'));
        return setList(newList);
      }
      return fetchList();
    }
  }, []);

  return (
    <>
      <div css={styleCont.cardCont}>
        <h3 css={styleText.title}>Featured Pokemon</h3>
        <div css={styleCont.cardSect} id="list">
          {list.map((item) => {
            return (
              <Card
                img={item.image}
                name={item.name}
                key={item.id}
                id={item.id}
                owned={item.owned}
              />
            );
          })}
        </div>
      </div>
      <div css={styleCont.container}>
        <Button link={false} title="Load More" onClick={fetchList} />
        {list.length > 6 && <Button link={false} title="go to top" />}
      </div>
    </>
  );
}

export default Home;

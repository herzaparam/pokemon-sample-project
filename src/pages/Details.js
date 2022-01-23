import React, { useEffect, useState, useContext } from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import { pokemonContext } from '../helper/context';
import { theme } from '../helper/theme';
import StatsIndicator from '../components/StatsIndicator/StatsIndicator';
import PokeballIcon from '../components/SVG/PokeballIcon';

const style = {
  container: {
    minHeight: '90vh',
    backgroundColor: 'whitesmoke',
    display: 'flex',
    flexDirection: 'column',
  },
  contTop: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  groupType: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: '1em 1.3em',
  },
  catchGroup: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    marginLeft: '-75px',
    padding: '10px',
    borderRadius: '16px',
    '&:hover': {
      backgroundColor: 'hsl(208,9%,66%,0.7)',
    },
    '& h3': {
      fontSize: '32px',
      fontWeight: '800',
      color: theme.color.yellow,
      textAlign: 'center',
    },
  },
  typeCont: {
    backgroundColor: theme.color.flowerBlue,
    margin: 'auto',
    padding: '5px 1em',
    borderRadius: '16px',
    boxShadow: '0px 0px 5px 5px rgba(161,170,178,0.5)',
    '& p': {
      fontSize: '20px',
      fontWeight: '900',
      color: theme.color.yellow,
    },
  },
  moveCont: {
    backgroundColor: 'white',
    margin: '8px',
    padding: '5px 1em',
    borderRadius: '16px',
    boxShadow: '0px 0px 5px 5px rgba(161,170,178,0.5)',
    '& p': {
      color: theme.color.darkBlue,
    },
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    letterSpacing: '.7px',
    color: theme.color.darkBlue,
    textAlign: 'center',
  },
  image: {
    width: '10em',
  },
  icon: {
    height: '150px',
    fill: '#ED5564',
  },
};

function Details() {
  let location = useLocation();
  // console.log(location);

  const index = location?.search?.split('=')[1];
  // get pokemon name from parameter
  const pokemonName = location?.pathname.split('/')[2];

  const [hovered, setHovered] = useState(false);
  const { pokemon, setPokemon, list, setList } = useContext(pokemonContext);
  // console.log(list);
  // console.log(location);

  const fetchDetail = () => {

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
    			status
    			message
        }
      }`;

    const gqlVariables = {
      name: pokemonName,
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
        list[`${index}`].abilities = res.data.pokemon.abilities;
        list[`${index}`].moves = res.data.pokemon.moves;
        list[`${index}`].stats = res.data.pokemon.stats;
        list[`${index}`].types = res.data.pokemon.types;
      });
  };
  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <div css={style.container}>
      <Link to={`${location.pathname}/catch?index=${index}`}>
        <div
          css={style.catchGroup}
          onMouseEnter={() => setHovered(!hovered)}
          onMouseLeave={() => setHovered(!hovered)}
        >
          {hovered && <h3>Catch!</h3>}
          <PokeballIcon hovered={hovered} width="150px" height="150px" />
        </div>
      </Link>
      <div css={style.contTop}>
        <img
          src={list[`${index}`].image}
          alt=""
          css={{ width: '75%', margin: 'auto' }}
        />
        <h2 css={style.title}>{list[`${index}`].name?.toUpperCase()}</h2>
        <h2
          css={[
            style.title,
            { fontSize: '2rem', textAlign: 'left', margin: '.5em 0 0 1em' },
          ]}
        >
          Types
        </h2>
        <div css={style.groupType}>
          {list[`${index}`]?.types?.map((item, index) => {
            return (
              <div css={style.typeCont} key={index}>
                <p>{item.type.name}</p>
              </div>
            );
          })}
        </div>
        <h2
          css={[
            style.title,
            { fontSize: '2rem', textAlign: 'left', margin: '.5em 0 0 1em' },
          ]}
        >
          Stats
        </h2>
        {list[`${index}`]?.stats?.map((item, index) => {
          return (
            <StatsIndicator
              statsName={item.stat.name}
              baseStats={item.base_stat}
              key={index}
            />
          );
        })}
      </div>
      <h2
        css={[
          style.title,
          { fontSize: '2rem', textAlign: 'left', margin: '.5em 0 0 1em' },
        ]}
      >
        Moves
      </h2>
      <div css={style.groupType}>
        {list[`${index}`]?.moves?.map((item, index) => {
          return (
            <div css={style.moveCont} key={index}>
              <p>{item.move.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Details;

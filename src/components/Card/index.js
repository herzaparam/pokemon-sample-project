import React, { useContext } from 'react';
import { theme } from '../../helper/theme';
import PropTypes from 'prop-types';
import { Link, useSearchParams } from 'react-router-dom';
import { pokemonContext } from '../../helper/context';

const style = {
  cont: {
    height: '200px',
    width: '125px',
    margin: 'auto',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0px 0px 5px 5px rgba(161,170,178,0.5)',
    // -webkit-box-shadow: 3px 2px 18px 9px rgba(61,170,231,0.5),
    // -moz-box-shadow: 3px 2px 18px 9px rgba(61,170,231,0.5),
  },
  contTop: {
    height: '60%',
    backgroundColor: '#a1aab2',
    borderRadius: '12px 12px 0 0',
  },
  contDown: {
    height: '40%',
    backgroundColor: 'whitesmoke',
    padding: '10px',
    borderRadius: '0 0 12px 12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    objectFit: 'contain',
  },
  tag: {
    backgroundColor: theme.color.yellow,
    borderRadius: '12px',
    textAlign: 'center',
    padding: '5px',
    '& p': {
      color: 'black',
      fontWeight: '700',
    },
  },
  paragraph: {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.2rem',
    textAlign: 'justify',
    margin: '15px 0',
    textDecoration: 'none',
    color: 'black',
  },
};

function Card({ img, name, id, onClick, owned }) {
  const { pokemon, setPokemon } = useContext(pokemonContext);
  // console.log(pokemon);
  return (
    <div css={style.cont} onClick={() => setPokemon({ name, image: img })}>
      <Link
        to={`/pokemon-details/${name}?index=${id - 1}`}
        css={style.paragraph}
      >
        <div css={style.contTop}>
          <img src={img} alt="" css={style.image} />
        </div>
        <div css={style.contDown}>
          <h4>{name?.toUpperCase()}</h4>
          <div css={style.tag}>
            <p>Owned: {owned}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  owned: PropTypes.number,
};

export default Card;

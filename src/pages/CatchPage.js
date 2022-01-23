import React, { useEffect, useState, useContext } from 'react';
import { keyframes } from '@emotion/react';
import { theme } from '../helper/theme';
import FailedIcon from '../assets/failed icon.svg';
import SuccessIcon from '../assets/success icon.svg';
import { Link } from 'react-router-dom';
import iconLeft from '../assets/icon-left.svg';
import { pokemonContext } from '../helper/context';

const animation = keyframes({
  'from, 0%, to': {
    top: '108px',
    left: '108px',
    width: 0,
    height: 0,
    opacity: '1',
  },
  '100%': {
    top: 0,
    left: 0,
    width: '216px',
    height: '216px',
    opacity: '0',
  },
});

const style = {
  container: {
    minHeight: '90vh',
    backgroundColor: 'whitesmoke',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2em',
    '& h3': {
      fontSize: '2rem',
      fontWeight: '900',
      letterSpacing: '1.5px',
      textAlign: 'center',
    },
  },
  ldsRipple: {
    display: 'inline-block',
    position: 'relative',
    width: '240px',
    height: '240px',
    '& div': {
      backgroundColor: theme.color.flowerBlue,
      position: 'absolute',
      border: '4px solid #fff',
      opacity: '1',
      borderRadius: '50%',
      animation: `${animation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite`,
    },
    '& div:nth-of-type(2)': {
      animationDelay: '-0.5s',
    },
  },
  topContainer: {
    width: '240px',
    minHeight: '240px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: '18px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textAlign: 'center',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    padding: '7px 10px 0',
    backgroundColor: theme.color.yellow,
    borderRadius: '14px',
    border: 'none',
    margin: '7px 0',
    '&:hover': {
      boxShadow: '0px 0px 5px 5px rgba(161,170,178,0.5)',
    },
  },
};

function CatchPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { pokemon, setPokemon, owned, setOwned } = useContext(pokemonContext);
  console.log(owned);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let catchPokemon;
      if (Math.random() >= 0.5) {
        setOwned([...owned, pokemon]);
        catchPokemon = true;
      } else {
        catchPokemon = false;
      }
      setSuccess(catchPokemon);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div css={style.container}>
      {loading && (
        <>
          <div css={style.ldsRipple}>
            <div></div>
            <div></div>
          </div>
          <h3 css={{ color: theme.color.flowerBlue }}>Waiting...</h3>
        </>
      )}
      {!loading && (
        <div css={style.topContainer}>
          {success ? (
            <>
              <img src={SuccessIcon} alt="" css={style.icon} />
              <h3 css={{ color: '#25ae88' }}>Successful!</h3>
              <p css={[style.paragraph, { color: '#25ae88' }]}>
                Gotta catch em' all!
              </p>
            </>
          ) : (
            <>
              <img src={FailedIcon} alt="" css={style.icon} />
              <h3 css={{ color: '#e63946' }}>Failed!</h3>
              <p css={[style.paragraph, { color: '#e63946' }]}>
                it ran away ...
              </p>
            </>
          )}
          <button css={style.backButton}>
            <Link to="/">
              <img src={iconLeft} alt="" height={40} />
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default CatchPage;

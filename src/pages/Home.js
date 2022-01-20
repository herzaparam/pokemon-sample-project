import React from 'react';
import pikachu from '../assets/pikachu.png';
import ash from '../assets/Hoennash.png';
import Button from '../components/Button';
import { theme } from '../helper/theme';
import Card from '../components/Card';

const styleCont = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '2em',
    minHeight: '36vh',
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
    gridRowGap: '10px',
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
  paragraph: {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.2rem',
    textAlign: 'justify',
    margin: '15px 0',
  },
};
const style = {
  input: {
    margin: '15px 0',
    width: '75%',
    alignSelf: 'center',
  },
};

function Home() {
  return (
    <>
      <div css={styleCont.cardCont}>
        <h3 css={styleText.title}>Featured Pokemon</h3>
        <input type="text" css={style.input} placeholder='Search Here'/>
        <div css={styleCont.cardSect} id="list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div css={styleCont.container}>
        {/* <img src={pikachu} alt="" css={styleImg.pikachu} /> */}
        <div css={styleCont.content}>
          <h2 css={styleText.title}>My Pokemon</h2>
          <p css={styleText.paragraph}>
            Catching Pokémon is one way to collect them! You can also collect
            and see them!
          </p>
          <Button />
        </div>
      </div>
    </>
  );
}

export default Home;

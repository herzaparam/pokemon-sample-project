import React from 'react';
import { Link } from 'react-router-dom';
import PokemonTag from '../../assets/pokemon-tag.png';
import Button from '../Button'

import { theme } from '../../helper/theme';

const container = {
  navbar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: theme.color.halfLightBlue,
  }
};
const styledImg = {
  logo: {
    width: '180px',
    objectFit: 'contain',
  },
  icon: {
    width: '35px',
    objectFit: 'contain'
  }
};
const styledText = {
  navbar: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '24px',
    fontWeight: '700',
  },
};

function Navbar() {
  return (
    <nav css={container.navbar}>
      <img src={PokemonTag} alt="pokeball" css={styledImg.logo} />
      <Button />
    </nav>
  );
}

export default Navbar;
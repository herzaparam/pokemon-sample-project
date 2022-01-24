import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PokemonTag from '../../assets/pokemon-tag.png';
import ToggleButton from '../ToggleButton';
import Button from '../Button';

import { theme } from '../../helper/theme';

const container = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: theme.color.darkBlue,
  },
};
const styledImg = {
  logo: {
    width: '150px',
    objectFit: 'contain',
  },
  icon: {
    width: '35px',
    objectFit: 'contain',
  },
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
  const location = useLocation();
  const pathname = location.pathname.split('/').at(-1);
  return (
    <nav css={container.navbar}>
      <img src={PokemonTag} alt="pokeball" css={styledImg.logo} />
      {pathname !== 'catch' && (
        <Button
          link={true}
          title={
            location.pathname === '/my-pokemon-list' ? 'Home' : 'My Pokemon'
          }
        />
      )}
    </nav>
  );
}

export default Navbar;

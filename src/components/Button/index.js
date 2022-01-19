import React from 'react';
import { Link } from 'react-router-dom';
import PokeBall from '../../assets/pokeball-1.png';

import { theme } from '../../helper/theme';

const styledImg = {
  logo: {
    width: '180px',
    objectFit: 'contain',
  },
  icon: {
    height: '24px',
    objectFit: 'contain',
    marginLeft: '5px',
  },
};
const styledBtn = {
  btn: {
    display: 'flex',
    borderRadius: '12px',
    alignItems: 'center',
    border: 'none',
    padding: '5px 10px',
  },
  btnNav: {
    width: '100%',
    margin: '15px 5px',
    backgroundColor: theme.color.lightBlue,
    border: '3px solid white',
  },
  linkBtn: {
    textDecoration: 'none',
    color: theme.color.yellow,
    fontSize: '1.5rem',
    fontWeight: '700',
    textAlign: 'center',
  },
};

function Button() {
  return (
    <button css={[styledBtn.btn, styledBtn.btnNav]}>
      <Link to="/list" css={styledBtn.linkBtn}>
        My Pokemon
      </Link>
      <img src={PokeBall} alt="pokeball icon" css={styledImg.icon} />
    </button>
  );
}

export default Button;

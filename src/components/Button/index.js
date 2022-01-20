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
    marginRight: '5px',
  },
};
const styledBtn = {
  btn: {
    display: 'flex',
    borderRadius: '12px',
    alignItems: 'center',
    border: 'none',
    padding: '5px 10px',
    textAlign: 'center',
    backgroundColor: theme.color.lightBlue,
    '&:hover': {
      backgroundColor: theme.color.yellow,
    }
  },
  linkBtn: {
    textDecoration: 'none',
    color: theme.color.yellow,
    fontSize: '1.5rem',
    fontWeight: '700',
    '&:hover': {
      color: theme.color.lightBlue,
    }
  },
};

function Button() {
  return (
    <button css={styledBtn.btn}>
      <img src={PokeBall} alt="pokeball icon" css={styledImg.icon} />
      <Link to="/list" css={styledBtn.linkBtn}>
        Click Here!
      </Link>
    </button>
  );
}

export default Button;

import React from 'react';
import { Link } from 'react-router-dom';
import PokeBall from '../../assets/pokeball-1.png';
import PropTypes from 'prop-types';

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
    padding: '5px 12px',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: theme.color.lightBlue,
    '&:hover': {
      backgroundColor: theme.color.yellow,
    },
  },
  linkBtn: {
    textDecoration: 'none',
    color: theme.color.yellow,
    fontSize: '1.2rem',
    fontWeight: '700',
    '&:hover': {
      color: theme.color.lightBlue,
    },
  },
};

function Button({ title, onClick, link }) {
  return link ? (
    <button css={styledBtn.btn} onClick={onClick}>
      <img src={PokeBall} alt="pokeball icon" css={styledImg.icon} />
      <Link to="/list" css={styledBtn.linkBtn}>
        {title}
      </Link>
    </button>
  ) : (
    <button css={[styledBtn.btn, styledBtn.linkBtn, {margin: '0 20px'}]} onClick={onClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  link: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;

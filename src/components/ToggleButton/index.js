import React from 'react';
import { theme } from '../../helper/theme';

const styledBtn = {
  btn: {
    display: 'inline-block',
    borderRadius: '12px',
    alignItems: 'center',
    border: 'none',
    padding: '5px 10px',
    textAlign: 'center',
  },
  toggle: {
    backgroundColor: theme.color.darkBlue,
    border: '3px solid white'
  },
  bar: {
    width: '30px',
    height: '3px',
    backgroundColor: 'white',
    margin: '5px 0',
    transition: '0.4s',
    borderRadius: '3px'
  },
};

function ToggleButton() {
  return (
    <button css={[styledBtn.btn, styledBtn.toggle]}>
      <div css={styledBtn.bar}></div>
      <div css={styledBtn.bar}></div>
      <div css={styledBtn.bar}></div>
    </button>
  );
}

export default ToggleButton;

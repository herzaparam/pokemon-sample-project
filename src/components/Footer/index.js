import React from 'react';
import githublogo from '../../assets/github-logo.png';
import { theme } from '../../helper/theme';

const style = {
  cont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.darkBlue,
    padding: '1em 2em',
  },
  logo: {
    width: '24px',
    height: '24px',
    marginRight: '10px',
  },
  text: {
    fontWeight: '400',
    color: 'white',
    fontSize: '18px',
    letterSpacing: '1px',
  },
};

function Footer() {
  return (
    <footer css={style.cont}>
      <img src={githublogo} alt="" css={style.logo} />
      <h4 css={style.text}>herzaparam</h4>
    </footer>
  );
}

export default Footer;

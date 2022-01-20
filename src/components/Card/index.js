import React from 'react';
import { theme } from '../../helper/theme';

const style = {
  cont: {
    borderRadius: '12px',
    height: '200px',
    width: '125px',
    margin: 'auto',
  },
  contTop: {
    height: '60%',
    backgroundColor: '#a1aab2',
  },
  contDown: {
    height: '40%',
    backgroundColor: 'whitesmoke',
  },
};

function Card() {
  return (
    <div css={style.cont}>
      <div css={style.contTop}>
        <img src="" alt="" />
      </div>
      <div css={style.contDown}></div>
    </div>
  );
}

export default Card;

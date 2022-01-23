import React from 'react';
import { theme } from '../../helper/theme';
import PropTypes from 'prop-types';

const style = {
  cont: {
    backgroundColor: theme.color.yellow,
    width: '90%',
    margin: '5px auto',
    padding: '5px 1em',
    borderRadius: '5px',
  },
  groupBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bar: {
    height: '14px',
    borderRadius: '10px',
    backgroundColor: theme.color.flowerBlue,
    // margin: '0 auto',
  },
  paragraph: {
    margin: '0 0 0 5px',
    fontSize: '14px',
    fontWeight: '900',
  },
};
function StatsIndicator({ statsName, baseStats }) {
  return (
    <div css={style.cont}>
      <p css={style.paragraph}>{statsName}</p>
      <div css={style.groupBar}>
        <div css={[style.bar, { width: `${baseStats}%` }]}></div>
        <p css={style.paragraph}>{baseStats}</p>
      </div>
    </div>
  );
}

StatsIndicator.propTypes = {
  statsName: PropTypes.string.isRequired,
  baseStats: PropTypes.number.isRequired,
};

export default StatsIndicator;

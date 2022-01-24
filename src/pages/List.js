import React, { useEffect, useContext, useState } from 'react';
import Card from '../components/Card';
import { pokemonContext } from '../helper/context';
import { useLocation } from 'react-router-dom';
import { theme } from '../helper/theme';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: 'white',
    padding: '2em',
    minHeight: '90vh',
    justifyContent: 'center',
  },
  cardSect: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridRowGap: '25px',
    zIndex: '1',
    '@media(min-width: 1024px)': {
      gridTemplateColumns: 'auto auto auto',
    },
  },
  cont: {
    minHeight: '170px',
    width: '145px',
    margin: 'auto',
    borderRadius: '12px',
    boxShadow: '0px 0px 5px 5px rgba(161,170,178,0.5)',
    '@media(min-width: 768px)': {
      minHeight: '200px',
      width: '175px',
    },
    // -webkit-box-shadow: 3px 2px 18px 9px rgba(61,170,231,0.5),
    // -moz-box-shadow: 3px 2px 18px 9px rgba(61,170,231,0.5),
  },
  contTop: {
    height: '60%',
    borderRadius: '12px 12px 0 0',
  },
  contDown: {
    height: '40%',
    backgroundColor: '#a1aab2',
    padding: '10px',
    borderRadius: '0 0 12px 12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    objectFit: 'contain',
  },
  btn: {
    backgroundColor: theme.color.darkBlue,
    border: 'none',
    outline: 'none',
    borderRadius: '12px',
    color: theme.color.yellow,
    '&:hover': {
      backgroundColor: theme.color.yellow,
      color: theme.color.flowerBlue,
      fontWeight: '900',
    },
  },
  title: {
    fontSize: '2rem',
    fontWeight: '800',
    letterSpacing: '.7px',
    color: theme.color.darkBlue,
    textAlign: 'center',
  },
};

function List() {
  const { list, setList, myList, setMyList } = useContext(pokemonContext);
  const [_myList, _setMyList] = useState([]);

  const renderEmpty = () => {
    return (
      <div>
        <h3 css={style.title}>You don't have Pokemon yet</h3>
      </div>
    );
  };

  const handleClick = (_item) => {
    const index = _myList
      ?.map(function (e) {
        return e.id;
      })
      .indexOf(_item.id);
    myList.splice(index, 1);
    _setMyList([...myList]);
    if ([...myList].length === 0) {
      localStorage.removeItem('myList');
    } else {
      const stringMyList = JSON.stringify([...myList]);
      localStorage.setItem('myList', stringMyList);
    }

    // find index for decrement 'owned' in list
    const secondIndex = list
      ?.map(function (e) {
        return e.id;
      })
      .indexOf(_item.pokeId);
    if (list[`${secondIndex}`]?.owned > 0) {
      list[`${secondIndex}`].owned = --list[`${secondIndex}`].owned;
      const stringList = JSON.stringify(list);
      localStorage.setItem('list', stringList);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('myList') !== null) {
      const myNewList = JSON.parse(localStorage.getItem('myList'));
      setMyList(myNewList);
      _setMyList([...myNewList]);
    }
    if (localStorage.getItem('list') !== null) {
      const newList = JSON.parse(localStorage.getItem('list'));
      return setList(newList);
    }
  }, []);

  return (
    <div css={style.container}>
      {_myList.length === 0 && renderEmpty()}
      <div css={style.cardSect}>
        {_myList?.map((item, index) => {
          return (
            <div
              css={style.cont}
              // onClick={() => setPokemon({ name, image: img })}
              key={index}
            >
              <div css={style.contTop}>
                <img src={item.image} alt="" css={style.image} />
              </div>
              <div css={style.contDown}>
                <h3
                  css={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: '900',
                  }}
                >
                  <span css={{ fontWeight: '300' }}>nick:</span>{' '}
                  {item.nickname?.toUpperCase()}
                </h3>
                <h4
                  css={{
                    textAlign: 'center',
                    color: 'black',
                    fontWeight: '900',
                  }}
                >
                  {item.name}
                </h4>
                <button css={style.btn} onClick={() => handleClick(item)}>
                  Release
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;

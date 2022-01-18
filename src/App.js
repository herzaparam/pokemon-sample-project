import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

/** @jsx jsx */
import { jsx } from '@emotion/react';

const btn = {
    color: 'green',
    fontSize: '53px',
    borderRadius: '12px',
}
const btnActive = {
    fontSize: '24px',
    backgroundColor: 'black',
}

class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };
  render() {
    return (
      <div
        className="App"
        css={{
          backgroundColor: 'hotpink',
          '&:hover': {
            color: 'lightgreen',
          },
        }}
      >
        <h1>I'm configuring setting up Webpack!!!</h1>
        <p>{`The count now is: ${this.state.counter}`}</p>
        <button onClick={this.handleClick} css={btn}>Click me</button>
      </div>
    );
  }
}
export default hot(module)(App);

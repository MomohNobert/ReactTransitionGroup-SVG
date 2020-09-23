import React, { useState } from 'react';
import './App.css';

import { CSSTransition } from 'react-transition-group';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [spaces, setSpaces] = useState([null, null, null, null, null, null, null, null, null]);

  const setSpace = (index) => {
    const newSpaces = [...spaces];
    newSpaces[index] = currentPlayer;

    setSpaces(newSpaces);
    currentPlayer === 'x' ?
    setCurrentPlayer('o')
    :
    setCurrentPlayer('x')
  }

  return (
    <div className="game">
        <div className="game-board">
          {spaces.map((space, index) =>
            <BoardSpace
              key={`space-${index}`}
              symbol={space}
              index={index}
              setSpace={setSpace}
            />
          )}
        </div>
    </div>
  );
};

function BoardSpace({ symbol, index, setSpace }) {
  return (
    <button
    onClick={() => {
      if (symbol) return;
      setSpace(index)}
    }
    className={`
      game-board__button
      ${symbol ? 'game-board__button--disabled' : ''}
    `}>
      
      <CSSTransition
      in={symbol === 'x'}
      timeout={700}
      classNames={'x-'}
      exit={false}
      mountOnEnter={true}>
        <X />
      </CSSTransition>

      <CSSTransition
      in={symbol === 'o'}
      timeout={700}
      classNames={'o-'}
      exit={false}
      mountOnEnter={true}>
        <O />
      </CSSTransition>
      
    </button>
  );
}

function X() {
  return (
    <svg className="x" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.6 51.6" style={{ enableBackground: 'new 0 0 51.6 51.6' }} xmlSpace="preserve">
      <line className="x__line x__line-2" x1="10.4" y1="10" x2="41.2" y2="41.6"/>
      <line className="x__line x__line-1" x1="41.6" y1="10.4" x2="10" y2="41.2"/>
    </svg>
  );
}

// -----------
// O Component
// -----------

function O() {
  return (
    <svg className="o" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" style={{ enableBackground: 'new 0 0 60 60' }} xmlSpace="preserve">
      <circle className="o__line" cx="30" cy="30" r="20"/>
    </svg>
  );
}

export default App;

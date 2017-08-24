import React from 'react';

const NewGameButton = (props) => {
  return (
    <button className="btn btn-default"
    onClick={props.handleNewGameClick}>
      New Game
    </button>
  );
}

export default NewGameButton;

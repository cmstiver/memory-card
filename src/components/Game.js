import React, { useEffect, useState } from 'react';
import Cards from './Card';
import Scoreboard from './Scoreboard';

const Game = () => {
  const [playerChoices, setPlayerChoices] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const updatePlayerChoices = (choice) => {
    const choiceNum = Number(choice);
    setPlayerChoices((prevPlayerChoices) => {
      if (prevPlayerChoices.includes(choiceNum)) {
        setCurrentScore(0);
        return setPlayerChoices([]);
      }
      setCurrentScore((prevScore) => Number(prevScore) + 1);

      if (maxScore < currentScore) {
        setMaxScore(currentScore);
      }
      return [...prevPlayerChoices, choiceNum];
    });
  };

  return (
    <div id="game">
      <Cards updatePlayerChoices={updatePlayerChoices} />
      <Scoreboard currentScore={currentScore} maxScore={maxScore} />
    </div>
  );
};

export default Game;

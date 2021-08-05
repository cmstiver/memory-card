import React, { useEffect, useState } from 'react';
import Cards from './Card';
import Scoreboard from './Scoreboard';

const Game = () => {
  // eslint-disable-next-line no-unused-vars
  const [playerChoices, setPlayerChoices] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    if (currentScore > maxScore) {
      setMaxScore(currentScore);
    }
  }, [currentScore]);

  const updatePlayerChoices = (choice) => {
    const choiceNum = Number(choice);
    setPlayerChoices((prevPlayerChoices) => {
      if (prevPlayerChoices.includes(choiceNum)) {
        setCurrentScore(0);
        setPlayerChoices([]);
        return false;
      }
      setCurrentScore((prevScore) => Number(prevScore) + 1);

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

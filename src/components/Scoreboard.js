import React from 'react';

const Scoreboard = (props) => (
  <div id="scoreboard">
    <div id="current">{`Current Score: ${props.currentScore}`}</div>
    <div id="high">{`Highscore: ${props.maxScore}`}</div>
  </div>
);

export default Scoreboard;

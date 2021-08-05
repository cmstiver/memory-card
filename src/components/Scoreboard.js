import React, { useState, useEffect } from 'react';

const Scoreboard = (props) => (
  <div id="scoreboard">
    <div>
      Current Score:
      {props.currentScore}
    </div>
    <div>
      High Score:
      {props.maxScore}
    </div>
  </div>
);

export default Scoreboard;

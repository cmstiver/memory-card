import React, { useState, useEffect } from 'react';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../imgs', false, /\.(png|jpe?g|svg)$/));

const Cards = (props) => {
  const [cardArray, setCardArray] = useState([]);

  const randomImageList = (choice = undefined) => {
    if (choice !== undefined) {
      props.updatePlayerChoices(choice);
    }
    const array = [];
    const cardAmount = 10;
    for (let i = 0; array.length < cardAmount; i += 1) {
      const num = Math.floor(Math.random() * cardAmount);
      if (!array.includes(num)) {
        array.push(num);
      }
    }
    setCardArray(array);
  };

  const getTargetID = (e) => {
    e.stopPropagation();
    const choice = e.target.id;
    randomImageList(choice);
  };

  useEffect(() => {
    randomImageList();
    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('click', randomImageList);
    });
    return () => {
      document.querySelectorAll('.card').forEach((card) => {
        card.removeEventListener('click', randomImageList);
      });
    };
  }, []);

  return (
    <div id="cards-container">
      {cardArray.map((img) => (
        <button id={img} className="card" type="button" onClick={getTargetID}>
          <img className="card-image" src={images[img].default} alt={img} />
        </button>
      ))}
    </div>
  );
};

export default Cards;

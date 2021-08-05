import React, { useState, useEffect } from 'react';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../imgs', false, /\.(png|jpe?g|svg)$/));

console.log(images);

const Cards = () => {
  const randomImageList = () => {
    const array = [];
    const cardAmount = 10;
    for (let i = 0; array.length < cardAmount; i += 1) {
      const num = Math.floor(Math.random() * cardAmount);
      if (!array.includes(num)) {
        array.push(num);
      }
    }
    return array;
  };

  return (
    <div id="card-container">
      {randomImageList().map((img) => (
        <img className="card-image" src={images[img].default} alt={img} />
      ))}
    </div>
  );
};

export default Cards;

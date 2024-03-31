import React from "react";
import "./Cards.css";
import MastersCards from "../../ArrayComponents/MastersCards";

const Cards = () => {
  return (
    <>
      <div className="wraper">
        <div className="cardCopy">
          {MastersCards.map((cards) => (
            <div key={cards.name} className="cardProperty">
              <div className="cardIMG">
                <img src={cards.image} alt="cards" />
              </div>
              <div>
                <h5>{cards.desc}</h5>
                <h6>{cards.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;

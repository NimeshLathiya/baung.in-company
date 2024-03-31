import React from "react";
import "./Books.css";
import BooksCard from "../../ArrayComponents/BooksCard";

const Books = () => {
  return (
    <>
      <div>
        <div className="wraper">
          {BooksCard.map((cards, id) => (
            <div key={id}>
              <div className="cardContainer">
                <div className="cardsImages">
                  <img
                    src={cards.image}
                    alt="cardsImage"
                    height={"358px"}
                    width={"635px"}
                  />
                </div>
                <div className="cardsData">
                  <h3>{cards.content}</h3>
                  <h6>{cards.desc}</h6>
                  <h6 className="viewMore">{cards.view}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Books;

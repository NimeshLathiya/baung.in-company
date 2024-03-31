import React from "react";
import "./Valuable.css";
import VasteProduct from "../../ArrayComponents/VasteProduct";

const Valuable = () => {
  return (
    <>
      <div className="wraper">
        <div>
          <div className="Interested">
            <h3>Interested in Selling?</h3>
            <h1>Waste is also valuable</h1>
            <h6>
              We are looking to recover and distribute high-quality waste
              plastic at the same time building a circular economy that ensures
              recovery of the material to re-enters the supply chain of good
              waste management system
            </h6>
          </div>

          <div>
            <div>
              <div className="mainClass">
                {VasteProduct.map((product, id) => (
                  <div className="valueClass" key={id}>
                    <div className="Ellipse">
                      <img src={product.image} alt="product image" />
                    </div>
                    <div className="plasticText">
                      <h5>{product.name}</h5>
                      <h6>{product.details}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Valuable;

import React from "react";
import Sellings from "../../ArrayComponents/Selling";
import "./Selling.css";

const Selling = () => {
  return (
    <>
      <section className="wraper">
        <div className="selling">
          <h3>Top Selling</h3>
          <h2>Waste Processing Product</h2>
        </div>

        <div className="allprod">
          {Sellings.map((product) => (
            <>
              <div className="products" key={product.price}>
                <div className="imagesdiv">
                  <img
                    src={product.image}
                    className="productImages"
                    alt="product"
                  />
                </div>
                <div className="baselist">
                  <h5>{product.name}</h5>
                  <h6>{product.price}</h6>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Selling;

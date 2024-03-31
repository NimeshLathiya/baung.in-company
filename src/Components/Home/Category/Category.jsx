import React from "react";
import box from "../../ArrayComponents/Box";
import "./Category.css";

const Category = () => {
  return (
    <>
      <section>
        <div className="wraper Category">
          <div className="Service">
            <h3>Category</h3>
            <h2>We Offer Best Service</h2>
          </div>

          <div className="box">
            {box.map((elements, id) => (
              <div className="boxOuter" key={id}>
                <div>
                  <img
                    src={elements.image}
                    className="imagesclass"
                    alt="icon"
                  />
                </div>
                <div key={elements.image}>
                  <h5 className="boxh5">{elements.text}</h5>
                  <h6 className="boxh6" style={{ color: "#393E46" }}>
                    {elements.desc}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;

import React from "react";
import "./WorldHealth.css";
import ExpertCatalouge from "../../ArrayComponents/ExpertCatalouge";
const WorldHealth = () => {
  return (
    <>
      <div className="wraper">
        <div className="popular">
          <h3>Most Popular Material</h3>
          <h1>The World of Health is Now Within Your Grasp</h1>
          <h6>
            See examples of some of the most popular materials designed by
            experts below. New materials every month at no extra cost.
          </h6>
        </div>

        <div className="ExpertsGroup">
          {ExpertCatalouge.map((expert, idx) => (
            <>
              <div className="expertClass" key={idx}>
                <div className="expertParent">
                  <img src={expert.image} alt="Catalouge" />
                </div>
                <div className="Catalouges">
                  <h5>{expert.name}</h5>
                  <h6>{expert.price}</h6>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorldHealth;

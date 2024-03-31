import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <>
      <section className="wraper">
        <div className="location">
          <div className="locimage">
            <img src="src\Components\Home\image\Map.png" alt="" />
          </div>
          <div className="map">
            <h3>Maps</h3>
            <h2>Find your nearest waste bank</h2>
            <h6>
              Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat
              id pharetra ultricies mauris. Eget augue at egestas et consequat
              quis ultricies. At vel aenean posuere neque a fermentum donec eros
              ut. Nullam mi egestas sed facilisis.
            </h6>
            <button>Search your waste bank here!</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;

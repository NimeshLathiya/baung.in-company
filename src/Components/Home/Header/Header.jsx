import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div>
        <div className="front-page-section">
          <main className="main">
            <div className="left">
              <h1>Hi, Folks!</h1>

              <h6>
                Inovation Dedication <br />
                and Sustainable Solution
              </h6>

              <p>
                Lorem ipsum dolor sit amet consectetur. Nisl donec tortor
                volutpat id pharetra ultricies mauris. Eget augue at egestas et
                consequat quis ultricies. At vel aenean posuere neque a
                fermentum donec eros ut. Nullam mi egestas sed facilisis.
              </p>

              <button>View Details</button>
            </div>
            <div className="right">
              <img src="src\Components\Home\image\Component 3.png" alt="" />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Header;

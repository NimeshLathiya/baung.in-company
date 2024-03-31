import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="wraper">
          <div className="mainFooter">
            <div className="leftside">
              <div>
                <img src="src\Components\Home\image\B ANG.in.png" alt="" />
              </div>
              <div>
                <h6 className="Address">
                  Address : Jl. Ring Road Utara, Ngringin, Condongcatur, Kec.
                  Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
                </h6>
                <h6 className="number">+62 812 234 6789</h6>
                <h6>buangin@services.id</h6>
              </div>
            </div>

            <div className="company">
              <h5>Company</h5>
              <h6 className="About">About</h6>
              <h6>Careers</h6>
              <h6>Mobile</h6>
            </div>
            <div className="Contact">
              <h5>Contact</h5>
              <h6 className="Help">Help/FAQ</h6>
              <h6>Press</h6>
              <h6>Affilates</h6>
            </div>
            <div className="More">
              <h5>More</h5>
              <h6 className="Airlinefees">Airlinefees</h6>
              <h6>Airline</h6>
              <h6>Low fare tips</h6>
            </div>
            <div className="Discover">
              <h5>Discover our app</h5>
              <div className="gpay">
                <img src="src\Components\Home\image\gpay.png" alt="" />
                <img src="src\Components\Home\image\apple.png" alt="" />
              </div>
              <div className="facebook">
                <img src="src\Components\Home\image\facebook.png" alt="" />
                <img src="src\Components\Home\image\insta.png" alt="" />
                <img src="src\Components\Home\image\twittwe.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

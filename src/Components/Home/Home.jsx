import React from "react";

import Header from "./Header/Header";
import Number from "./Number/Number";
import Category from "./Category/Category";
import Selling from "./Selling/Selling";
import Testimonial from "./Testinomial/Testimonial";
import Partner from "./Partner/Partner";
import Location from "./Location/Location";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Number />
      <Category />
      <Selling />
      <Testimonial />
      <Partner />
      <Location />
      <Footer />
    </>
  );
};

export default Home;

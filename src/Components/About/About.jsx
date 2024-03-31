import React from "react";
import "./About.css";
import WasteFlow from "./WasteFlow/WasteFlow";
import Books from "./Books/Books";
import OnlineClass from "./OnlineClass/OnlineClass";
import Cards from "./MasterCard/Cards";
import WorldHealth from "./WorldHealth/WorldHealth";
import Recycle from "./Recycle/Recycle";
import CardKilos from "./CardKilos/CardKilos";
import Valuable from "./Valuable/Valuable";
import Footer from "../Home/Footer/Footer";
const About = () => {
  return (
    <>
      <WasteFlow />
      <Books />
      <OnlineClass />
      <Cards />
      <WorldHealth />
      <Recycle />
      <CardKilos />
      <Valuable />
      <Footer />
    </>
  );
};

export default About;

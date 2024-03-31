import React from "react";
import "./WasteFlow.css";

const WasteFlow = () => {
  return (
    <>
      <div className="WasteFlow-Section">
        <div className="WasteFlow">
          <h3>Information & Education</h3>
          <h1>Waste Flow</h1>
        </div>

        <div className="wasteCard">
          <div className="innerDetails">
            <img src="src\Components\About\About Image\drop 1.png" alt="" />
            <h6>Waste Segregation by Clients</h6>
          </div>

          <div className="innerDetails">
            <img src="src\Components\About\About Image\storage 1.png" alt="" />
            <h6>Waste Storage at Client's Warehouse/ Shop/ Hous</h6>
          </div>

          <div className="innerDetails">
            <img src="src\Components\About\About Image\transfer 1.png" alt="" />
            <h6>Segregated Waste Collection</h6>
          </div>

          <div className="innerDetails">
            <img src="src\Components\About\About Image\process 1.png" alt="" />
            <h6>Waste Processing in W4C's Material Recovery Facility</h6>
          </div>

          <div className="innerDetails">
            <img src="src\Components\About\About Image\landfill 1.png" alt="" />
            <h6>Residue being Sent to the Landfill</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default WasteFlow;

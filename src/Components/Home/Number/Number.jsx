import React from "react";
import total from "../../ArrayComponents/TotalNum";
import "./Number.css";

const Number = () => {
  return (
    <>
      <section>
        <div className="totalSum wraper">
          {total.map((num) => (
            <div key={num.value}>
              <h5 className="numValue">{num.value}</h5>
              <p className="numName">{num.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Number;

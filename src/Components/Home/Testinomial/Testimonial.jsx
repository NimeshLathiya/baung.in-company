import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <section className="wraper ">
        <main className="testimonial">
          <div className="firstTest">
            <h3>Testimonial</h3>
            <h2>What people say about us.</h2>
          </div>
          <div className="talking">
            <div className="express">
              <h6>
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </h6>
            </div>
            <div className="client">
              <h5>Mike taylor</h5>
              <h6>Lahore, Pakistan</h6>
            </div>
            <img src="../../../" alt="" />
          </div>
        </main>
      </section>
    </>
  );
};

export default Testimonial;

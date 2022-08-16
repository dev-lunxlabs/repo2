import React from "react";
import "../../styles/Page1.css";

const Page9 = (props) => {
  return (
    <>
      <section className="red-section page9-height">
        <div className="mt-50">
          <p className="heading">Get started for free today</p>
        </div>
        <div className="info">
          <p className="page9-text">
            Try Fitune for free, and explore all the tools and services you need
            to start, run, and grow your business
          </p>
        </div>
        <div className="mt-50 mb-50 red-button mb-50">
          <button className="start-btn text-white">Start Free Trail</button>
        </div>
        <div className="info">
          <p className="page9-text">
            or arrange a FREE consultation to get setup
          </p>
          <a className="page9-text">Click here to arrange a time</a>
        </div>
      </section>
    </>
  );
};

export default Page9;

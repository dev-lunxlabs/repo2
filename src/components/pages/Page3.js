import React from "react";
import "../../styles/Page1.css";
import girl from "../images/girl.png";

const Page2 = (props) => {
  return (
    <>
      <section className="red-section blue">
        <div className="mt-50">
          <p className="heading-black">
            They love us because their clients love them
          </p>
        </div>
        <div className="info">
          <p className="information">
            Join Fitune, where thousands of fitness providers are monetizing
            their virtual and in-person services
          </p>
        </div>

        <div className="page3-layout">
          <div className="flex-container ">
            <div className="images">
              <img src={girl} alt=""></img>
            </div>
            <div className="content">
              <div className="page3-div">
                <p className="page3-information">
                  Glad I came across Fitune, really easy to set up, perfect for
                  my fitness classes. Customer service is first class. Thank you
                  for your support through these challenging times.
                </p>
                <p className="information">Georgia </p>
                <p className="page3-grey">Founder Diamond Studio</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page2;

import React from "react";
import "../../styles/Page1.css";
import screen1 from "../images/screen1.png";
import screen2 from "../images/screen2.png";
import asus from "../images/asus1.svg";
import vans from "../images/vans1.svg";
import adidas from "../images/adidas1.svg";
import nestle from "../images/nestle1.svg";
import visa from "../images/visa1.svg";
const Page1 = (props) => {
  return (
    <>
      <section className="mt-50">
        <div className="flex-container">
          <div className="content">
            <div className="title">
              <p>
                Sell videos, livestreams and in-person classes from your own
                website
              </p>
            </div>
            <div className="description">
              <p>
                Everything you need to grow your fitness business in a single
                platform. Get set up in minutes and start selling today. No
                code, No learning curve & No commitment.
              </p>
            </div>
            <div className="buttons">
              <button className="start-btn text-white">Start For Free</button>
              <button className="book-btn text-dark">Book a demo</button>
            </div>
          </div>
          <div className="images">
            <img src={screen1} alt=""></img>
            <img className="screen2" src={screen2} alt=""></img>
          </div>
        </div>
      </section>
      <div className="flex brands mb-50">
        <img className="logos" src={asus} alt=""></img>
        <img className="logos" src={vans} alt=""></img>
        <img className="logos" src={adidas} alt=""></img>
        <img className="logos" src={nestle} alt=""></img>
        <img className="logos" src={visa} alt=""></img>
      </div>
    </>
  );
};

export default Page1;

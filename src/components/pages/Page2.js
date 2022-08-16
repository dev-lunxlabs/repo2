import React from "react";
import "../../styles/Page1.css";
import screen1 from "../images/red-screen1.png";
import screen2 from "../images/red-screen2.png";

const Page2 = (props) => {
  return (
    <>
      <section className="red-section">
        <div className="mt-50">
          <p className="heading">
            Running your fitness business has never been easier
          </p>
        </div>
        <div className="info">
          <p className="text">
            Our all-in-one platform helps you automate and simplify your entire
            fitness business, from your website to your schedules, payments,
            marketing, clients, attendance and much more!
          </p>
        </div>
        <div className="mt-50 red-images">
          <img className="screens" src={screen1} alt=""></img>
          <img className="screens red-screen2" src={screen2} alt=""></img>
        </div>
        <div className="mt-50 red-button mb-50">
          <button className="start-btn text-white">Get Started For Free</button>
        </div>
      </section>
    </>
  );
};

export default Page2;

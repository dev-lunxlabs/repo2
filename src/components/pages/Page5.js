import React from "react";
import "../../styles/Page1.css";
import asus from "../images/asus2.svg";
import vans from "../images/vans2.svg";
import adidas from "../images/adidas2.svg";
import smallScreen from "../images/smallScreen.png";
import largeScreen from "../images/largeScreen.png";
const Page5 = (props) => {
  return (
    <>
      <section className="container">
        <div className="mt-50 heading-div">
          <p className="heading-black">Your own custom website in minutes</p>
        </div>
        <div className="info-div">
          <p className="text-black">
            Our all-in-one platform helps you automate and simplify your entire
            fitness business, from your website to your schedules, payments,
            marketing, clients, attendance and much more!
          </p>
        </div>
      </section>

      <section className="container display mt-25">
        <div className="bullet">
          <p className="points">1. Your own website template</p>
          <p className="points">2. Embeded to your website</p>
          <p className="points">3. Custom domain</p>
        </div>
        <div className="screens">
          <img src={smallScreen}></img>
          <img src={largeScreen}></img>
        </div>
      </section>
      <section className="container display">
        <div className="content">
          <div className="information-div">
            <p className="information">{props.content}</p>
            <p className="works">REPLACES WITH:</p>
          </div>
          <div className="brands mb-125">
            <img className="works-with" src={asus} alt=""></img>
            <img className="works-with" src={vans} alt=""></img>
            <img className="works-with" src={adidas} alt=""></img>
          </div>
        </div>
        <div className="sub-heading mt-25">
          <p>
            Already have a website? No worries… you can easily embed our
            brandable booking and schedule widgets onto your existing website,
            in just a few clicks!
          </p>
        </div>
      </section>
    </>
  );
};

export default Page5;

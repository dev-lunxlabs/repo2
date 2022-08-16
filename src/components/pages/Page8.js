import React from "react";
import "../../styles/Page1.css";
import asus from "../images/asus2.svg";
import vans from "../images/vans2.svg";
import adidas from "../images/adidas2.svg";
import world from "../images/world.png";
import talk from "../images/talk.png";
const Page8 = (props) => {
  return (
    <>
      <section className=" mt-150 mb-125">
        <div className="flex-container ">
          <div className="images">
            <img src={world} alt=""></img>
          </div>
          <div className="content">
            <div className="heading-black">
              <p>Go Borderless</p>
            </div>
            <div className="sub-heading-div">
              <p className="sub-heading">
                Borders shouldn’t stop your business from growing your business.
                Accept any card and over 130+ different currencies.
              </p>
              <p className="sub-heading">
                Operating in more than 30 countries and more!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-125">
        <div className="flex-container ">
          <div className="content">
            <div className="heading-black">
              <p className="works">TIRED OF COMPLICATED BOOKING SYSTEMS?</p>
              <p>Go Borderless</p>
            </div>
            <div className="sub-heading-div">
              <p className="sub-heading">
                Borders shouldn’t stop your business from growing your business.
                Accept any card and over 130+ different currencies.
              </p>
              <p className="sub-heading">
                Operating in more than 30 countries and more!
              </p>
            </div>
          </div>
          <div className="images">
            <img src={talk} alt=""></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page8;

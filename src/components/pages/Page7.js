import React from "react";
import "../../styles/Page1.css";
import visa4 from "../images/visa4.png";
import mastercard from "../images/mastercard.svg";
import visa3 from "../images/visa3.svg";
import amazon from "../images/amazon.svg";
import BigCard from "../BigCard";
const Page7 = (props) => {
  return (
    <>
      <section className=" mt-150 mb-75 blue">
        <div className=" flex-container">
          <div className="payments-div">
            <div className="heading-div">
              <p className=" payments heading-black mt-50">
                Seamless payments & instant payouts
              </p>
            </div>
            <div className="payment-summary">
              <p className="sub-heading">
                Feel in control of your cash flow and instantly get paid into
                your account. Fitune is partnered with leading payment providers
                across the world to support your sales efforts. Your clients can
                pay in their local currency using their preferred payment
                method.
              </p>
            </div>
            <div>
              <img className="payment-logos" src={mastercard} alt=""></img>
              <img className="payment-logos" src={visa3} alt=""></img>
              <img className="payment-logos" src={amazon} alt=""></img>
            </div>
          </div>
          <div className="payment-image ">
            <div className="payment-div1">
              <BigCard
                img="1"
                content="Connect directly to your Stripe account for instant payouts."
              />
              <BigCard
                img="2"
                content="Speed up the checkout process for your users with PayPal.(coming soon)"
              />
            </div>
            <div className="payment-div2">
              <BigCard
                img="3"
                content="Connect directly to your Stripe account for instant payouts."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page7;

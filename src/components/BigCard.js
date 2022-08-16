import React from "react";
import "../styles/Page1.css";
import visa4 from "./images/visa4.png";
import paypal from "./images/paypal.png";
import stripe from "./images/stripe.png";

const Page6 = (props) => {
  let img;
  if (props.img === "1") {
    img = <img src={visa4} alt=""></img>;
  } else if (props.img === "2") {
    img = <img src={paypal} alt=""></img>;
  } else {
    img = <img src={stripe} alt=""></img>;
  }
  return (
    <>
      <div className="white-card" id="payment-card">
        <div className="blue-card-body " id="payment-card">
          <div className="centralize">{img}</div>
          <div className="card-summary">
            <p className="white-card-heading ">{props.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page6;
